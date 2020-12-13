import React, { useEffect, useState } from 'react';

import { ReactComponent as TriangleIcon } from './../../assets/icons/triangle.svg';
import './DropDown.scss';

type Props = {
  defaultValue?: any;
  options?: string[];
  onChange: (value: string) => void;
};

/**
 * DropDown component
 */
const DropDown = ({ defaultValue, options = [], onChange }: Props) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // Handles select change
  const onChanges = (value: string) => {
    onChange(value);
    setValue(value || defaultValue);
  };
  return (
    <div className="drop-down">
      <div className="drop-down--placeholder">{value}</div>
      <select
        className="drop-down--select"
        value={value}
        onChange={(e) => onChanges(e.target.value)}
      >
        <option value="">{defaultValue}</option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className="drop-down--icon">
        <TriangleIcon />
      </div>
    </div>
  );
};

export default DropDown;
