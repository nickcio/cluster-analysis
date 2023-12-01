import React from 'react';
import { useParams } from 'react-router-dom';

const DistrictPlanDetails = () => {
  let { planId } = useParams();

  return (
    <div>
      <h1>District Plan {planId} Details</h1>
      {/* Content for district plan details */}
    </div>
  );
};

export default DistrictPlanDetails;
