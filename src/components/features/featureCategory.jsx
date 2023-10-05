import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyFeature as feats } from './dummyFeature';

export const FeatureCategory = () => {
  const navigate = useNavigate();

  const renderedFeat = feats.map((feat, index) => {
    return (
      <div className="feat" style={{ backgroundImage: `url(${feat.image})` }} key={index}>
        <div className="content">
          <h2>{feat.name}</h2>
          <button onClick={() => navigate(`${feat.link}`)}>More</button>
        </div>
      </div>
    );
  });

  return <>{renderedFeat}</>;
};
