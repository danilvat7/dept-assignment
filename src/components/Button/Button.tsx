import React from 'react';
import { ReactComponent as TriangleIcon } from './../../assets/icons/triangle.svg';

import './Button.scss';

type Props = {
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'dark' | 'blue';
};
const Button = ({
  label,
  onClick,
  type = 'button',
  styleType = 'dark',
}: Props) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn__${styleType}`}>
      <span className="btn--icon">
        <TriangleIcon />
      </span>
      <span className="btn--label">{label}</span>
    </button>
  );
};

export default Button;
