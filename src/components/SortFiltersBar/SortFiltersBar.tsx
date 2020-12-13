import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategories,
  selectIndustries,
  filterCases,
} from '../../store/cases';

import DropDown from '../DropDown/DropDown';

import './SortFiltersBar.scss';

/**
 * SortFiltersBar component
 * Filters cases by categories and indastries
 */
const SortFiltersBar = () => {
  const [filters, setFilter] = useState<{ [key: string]: string }>({});
  const categories = useSelector(selectCategories);
  const industries = useSelector(selectIndustries);
  const dispatch = useDispatch();

  // Dispatches filter changes to the storage
  const onFilterChange = (filterName: string) => (value: string) => {
    const updatedFilter = { ...filters, [filterName]: value };
    setFilter(updatedFilter);
    dispatch(filterCases(updatedFilter));
  };
  return (
    <div className="sort-filter-bar">
      <div className="sort-filter-bar--item">
        <div className="sort-filter-bar--label">Show me</div>
        <div className="sort-filter-bar--select">
          <DropDown
            onChange={onFilterChange('category')}
            options={categories}
            defaultValue="all work"
          />
        </div>
      </div>
      <div className="sort-filter-bar--item">
        <div className="sort-filter-bar--label">in</div>
        <div className="sort-filter-bar--select">
          <DropDown
            onChange={onFilterChange('industry')}
            options={industries}
            defaultValue="all industries"
          />
        </div>
      </div>
    </div>
  );
};

export default SortFiltersBar;
