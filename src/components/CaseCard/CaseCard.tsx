import React from 'react';

import { ICase } from '../../interfaces/case';
import { useHistory } from 'react-router-dom';
import { ReactComponent as TriangleIcon } from './../../assets/icons/triangle.svg';

import './CaseCard.scss';
type Props = {
  caseItem: ICase;
};
const CaseCard = ({ caseItem }: Props) => {
  const history = useHistory();
  return (
    <div
      className={`case-card ${
        !caseItem.image ? 'case-card__without-image' : ''
      }`}
    >
      <div className="case-card--holder" onClick={() => history.push('/')}>
        {caseItem.image ? (
          <div className="case-card--image">
            <img src={caseItem.image} alt={caseItem.name} />
          </div>
        ) : null}
        <div className="case-card--description">
          <h4>{caseItem.name}</h4>
          <p>{caseItem.description}</p>
          <a href="/" className="case-card--btn">
            <TriangleIcon />
            <span className="case-card--btn-label"> view case</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
