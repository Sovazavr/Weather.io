import React, {useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useCustomeDispatch } from './hooks/store';

import { Home } from './pages/Home/components/Home';
import { MonthStatisticse } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';
import { fetchCurrentWeather, fetchDailyWeather } from './store/thunks/fetchCurrentWeather';




function App() {
  const [city, getCity]= useState('Алтайский край, с. Новоегорьевское')
  const [modalActive, setModaleActive]=useState(false)
  const [dailyModal, getDailyModal]=useState({
    temp_day: 10,
    day_info: '404',
    icon_id: '404',
    info: '404',
  })

  const dispatch = useCustomeDispatch();
  useEffect(
  ()=>{dispatch(fetchCurrentWeather('658280'))
  dispatch(fetchDailyWeather('658280'))},
  [])
  const getNewCity = (name: string) => {getCity(name)}
  

  return (
    <div className="global-container">
       <Popup dailyModal={dailyModal} active={modalActive} setActive={setModaleActive} city={city}/>
      <div className="container">

        <Header getNewCity={getNewCity}/>
        <Routes>
          <Route path="/" element={<Home city={city} setActive={setModaleActive} getDaily={getDailyModal}/>} />
          <Route path="/month-statistics" element={<MonthStatisticse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
