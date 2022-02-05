import React from 'react';
import { node, string, bool } from 'prop-types';
import './style.css';

function ConditionalComponent({ children, className, condition }) {
  if (!condition) return null;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default ConditionalComponent;

ConditionalComponent.propTypes = {
  children: node.isRequired,
  className: string.isRequired,
  condition: bool.isRequired,
};
