import React from 'react';

import BannerImg from './../../assets/images/banner.png';
import Button from '../Button/Button';

import './Banner.scss';

/**
 * Banner component
 */
const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="banner" />
      <div className="banner--heading">
        <h2>WORK</h2>
      </div>
      <div className="banner--btn">
        <Button label={'view case'} />
      </div>
    </div>
  );
};

export default Banner;
