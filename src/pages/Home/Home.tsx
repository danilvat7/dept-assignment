import React, { useEffect } from 'react';
import Banner from './../../components/Banner/Banner';
import SortFiltersBar from './../../components/SortFiltersBar/SortFiltersBar';
import Clients from './../../components/Clients/Clients';
import ContactBlock from './../../components/ContactBlock/ContactBlock';
import Cases from '../../components/Cases/Cases';

import './Home.scss';
import { useDispatch } from 'react-redux';
import { fetchCases } from '../../store/cases';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCases());
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
