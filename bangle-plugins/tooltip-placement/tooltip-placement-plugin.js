import { createPopper } from '@popperjs/core/lib/popper-lite';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import popperOffsets from '@popperjs/core/lib/modifiers/popperOffsets';
import { Plugin } from 'prosemirror-state';

export const plugins = pluginsFactory;

const name = 'tooltip_placement';

const LOG = false;
let log = LOG
  ? console.log.bind(console, 'tooltip/tooltip-placement')
  : () => {};

/**
 * Dispatching show: true to the plugin will also update the tooltip position
 * Note: the state is interesting as it maintains the reference to the same state object if state is and was false
 * however any {show:true} dispatches will generate a new state object for easier reference checks. In a way
 * the state ref can be used to see if the position of tooltip has updated.
 *
 * To show a tooltip appendChild a div element to tooltipDOM with [data-popper-arrow] attribute
 *
 * @param {Object} options
 * @param {string} options.pluginName
 * @param {Element} options.tooltipDOM
 * @param {(view: any) => Element} options.getScrollContainerDOM
 * @param {(view: any, tooltipDOM: Element, scrollContainerDOM: Element) => {getBoundingClientRect: Function}} options.getReferenceElement
 * @param {string} options.placement
 * @param {(state: any, dispatch: any, view) => [number, number]} options.tooltipOffset
 * @param {(state: any, dispatch: any, view) => void} options.onUpdateTooltip - Called whenever tooltip is updated, will also be called when tooltip mounts for the first time
 * @param {(state: any, dispatch: any, view)  => void} options.onHideTooltip
 * @param {(view: any) => Array} options.customPopperModifiers
 * @param {(state: any) => Boolean} options.getInitialShowState
 * @param {Array} options.fallbackPlacement
 */
function pluginsFactory({
  pluginName = 'tooltipPlacementPlugin',
  tooltipStateKey,
  tooltipDOM,
  getScrollContainerDOM,
  getReferenceElement,
  placement = 'top',
  tooltipOffset,
  customPopperModifiers,
  fallbackPlacements = ['bottom', 'top'],
}) {
  // TODO can we remove this pluginName field
  tooltipDOM.setAttribute('data-tooltip-name', pluginName);

  const plugin = new Plugin({
    view: (view) => {
      return new TooltipPlacementView(view);
    },
  });

  class TooltipPlacementView {
    popperInstance = null;

    constructor(view) {
      this._view = view;
      this._tooltip = tooltipDOM;
      this._scrollContainerDOM = getScrollContainerDOM(view);
      // TODO should this be this plugins responsibility
      this._view.dom.parentNode.appendChild(this._tooltip);

      const pluginState = tooltipStateKey.getState(view.state);
      // if the initial state is to show, setup the tooltip
      if (pluginState.show) {
        this._showTooltip();
        return;
      }
    }

    update(view, prevState) {
      const pluginState = tooltipStateKey.getState(view.state);
      if (pluginState === tooltipStateKey.getState(prevState)) {
        return;
      }
      if (pluginState.show) {
        log('calling updatetoolip ');

        this._showTooltip();
      } else {
        log('calling hidetooltip');
        this._hideTooltip();
      }
    }

    destroy() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }

      this._view.dom.parentNode.removeChild(this._tooltip);
    }

    _hideTooltip = () => {
      log('hiding');
      if (this.popperInstance) {
        this._tooltip.removeAttribute('data-show');
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    };

    _showTooltip = () => {
      this._tooltip.setAttribute('data-show', '');
      this._createPopperInstance(this._view);
      this.popperInstance.update();
    };

    _createPopperInstance(view) {
      if (this.popperInstance) {
        return;
      }

      const showTooltipArrow = this._tooltip.querySelector(
        '[data-popper-arrow]',
      );
      const defaultModifiers = [
        offset,
        preventOverflow,
        flip,
        {
          name: 'offset',
          options: {
            offset: (popperState) => {
              return tooltipOffset(popperState);
            },
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements,
            padding: 10,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundary: this._scrollContainerDOM,
          },
        },
        popperOffsets,
        showTooltipArrow ? arrow : undefined,
        showTooltipArrow
          ? {
              name: 'arrow',
              options: {
                element: showTooltipArrow,
              },
            }
          : undefined,
      ].filter(Boolean);

      this.popperInstance = createPopper(
        getReferenceElement(view, this._tooltip, this._scrollContainerDOM),
        this._tooltip,
        {
          placement,
          modifiers: customPopperModifiers
            ? customPopperModifiers(
                view,
                this._tooltip,
                this._scrollContainerDOM,
                defaultModifiers,
              )
            : defaultModifiers,
        },
      );
    }
  }

  return plugin;
}