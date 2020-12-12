import React from 'react';
import BannerImg from './../../assets/images/banner.png';
import './Banner.scss';
import Button from '../Button/Button';

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
