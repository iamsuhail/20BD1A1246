import React, { useState } from 'react';
import './App.css';
import TrainSearchForm from './components/TrainSearchForm';
import TrainListings from './components/TrainListings';
import { fetchTrains, reserveSeats } from './api/trainApi';

function App() {
  const [trains, setTrains] = useState([]);

  const handleSearch = async (searchParams) => {
    const { source, destination, date } = searchParams;
    const fetchedTrains = await fetchTrains(source, destination, date);
    setTrains(fetchedTrains);
  };

  return (
    <div className="App">
      <h1>Train Reservation System</h1>
      <TrainSearchForm onSearch={handleSearch} />
      <TrainListings trains={trains} />
    </div>
  );
}

export default App;
