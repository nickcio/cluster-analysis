import React from 'react';
import { useParams } from 'react-router-dom';

const DistanceDetails = () => {
  let { id } = useParams(); // This gets the :id param from the URL

  return (
    <div>
      <h1>Ensemble {id} Distance Details</h1>
      {/* Content for distance details */}
    </div>
  );
};

export default DistanceDetails;
