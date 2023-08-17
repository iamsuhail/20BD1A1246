import React from 'react';
import { useParams } from 'react-router-dom';
// import './TrainDetails.css'; // You can define your own CSS styles in this file

function TrainDetails() {
  const { id } = useParams();

  // Fetch detailed train information using the ID from your backend API
  const detailedTrainData = {}; // Replace with actual data fetching

  return (
    <div className="train-details">
      <h2>Train Details for Train {id}</h2>
      {/* Display detailed train information */}
    </div>
  );
}

export default TrainDetails;
