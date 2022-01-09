import React, {useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useCustomeDispatch } from './hooks/store';

import { Home } from './pages/Home/components/Home';
import { MonthStatisticse } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import { fetchCurrentWeather, fetchDailyWeather } from './store/thunks/fetchCurrentWeather';




function App() {
  const [city, getCity]= useState('Алтайский край, с. Новоегорьевское')
  
  const dispatch = useCustomeDispatch();
  useEffect(
  ()=>{dispatch(fetchCurrentWeather('658280'))
  dispatch(fetchDailyWeather('658280'))},
  [])
  const getNewCity = (name: string) => {getCity(name)}
  

  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">

        <Header getNewCity={getNewCity}/>
        <Routes>
          <Route path="/" element={<Home city={city}/>} />
          <Route path="/month-statistics" element={<MonthStatisticse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
