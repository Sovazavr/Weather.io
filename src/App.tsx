import React, {useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/components/Home';
import { MonthStatisticse } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';




function App() {
  const [city, getCity]= useState('Санкт-Петербург')
 
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
