import React from 'react';

import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg';

import './ScrollToTop.scss';

const ScrollToTop = () => {
  const scrollTo = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="scroll-to-top" onClick={scrollTo}>
      <ArrowIcon />
      Top
    </div>
  );
};

export default ScrollToTop;
