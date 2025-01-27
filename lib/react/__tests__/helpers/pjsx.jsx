import { psx as banglePsx } from '@bangle.dev/test-helpers';
import React from 'react';

export function pjsx(name, ...args) {
  if (typeof name !== 'string') {
    return React.createElement(name, ...args);
  }
  if (name.startsWith('jsx_')) {
    return React.createElement(name.split('jsx_').join(''), ...args);
  }
  return banglePsx(name, ...args);
}

export const Span = (props) => {
  const { children, ...otherProps } = props;
  return React.createElement('span', otherProps, children);
};
