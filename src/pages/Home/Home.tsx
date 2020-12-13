import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCases } from '../../store/cases';

import Banner from './../../components/Banner/Banner';
import SortFiltersBar from './../../components/SortFiltersBar/SortFiltersBar';
import Clients from './../../components/Clients/Clients';
import ContactBlock from './../../components/ContactBlock/ContactBlock';
import Cases from '../../components/Cases/Cases';

import './Home.scss';

/**
 * Home component
 */
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCases());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home">
      <div className="home--banner">
        <Banner />
      </div>
      <div className="home--sort-filters-bar">
        <SortFiltersBar />
      </div>
      <div className="home--cases">
        <Cases />
      </div>
      <div></div>
      <div className="home--clients">
        <Clients />
      </div>
      <div className="home--contact-form">
        <ContactBlock />
      </div>
    </div>
  );
};

export default Home;
