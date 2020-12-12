import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredCases } from '../../store/cases';
import CaseCard from '../CaseCard/CaseCard';

import './Cases.scss';

const Cases = () => {
  const cases = useSelector(selectFilteredCases);

  return (
    <div className="cases">
      <div className="cases--list">
        {cases.map((caseItem, i) => {
          if (caseItem.group) {
            return (
              <div key={i} className="cases--grouped-items">
                {caseItem.group.map((groupedcaseItem, i) => {
                  return (
                    <div
                      className={`cases--grouped-item ${
                        groupedcaseItem.image
                          ? 'cases--grouped-item__with-image'
                          : ''
                      }`}
                      key={i}
                    >
                      <CaseCard caseItem={groupedcaseItem} />
                    </div>
                  );
                })}
              </div>
            );
          }
          return (
            <div className="cases--item" key={i}>
              <CaseCard caseItem={caseItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cases;
