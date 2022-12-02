import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './assets/loadingComponent/Loading';
import { useCustomeDispatch, useCustomeSelector } from './hooks/store';

import { Home } from './pages/Home/components/Home';
import { MonthStatisticse } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';
import { fetchCurrentWeather, fetchDailyWeather, fetchCurrentWeatherLatLon, fetchDailyWeatherLatLon } from './store/thunks/fetchCurrentWeather';
import { fullCity } from './assets/cityData/output';
import { CityList } from './shared/Header/CityList';



function App() {
  const [city, setCity] = useState('Алтайский край, с. Новоегорьевское')

  const [modalActive, setModaleActive] = useState(false)
  const [zip, setZip] = useState('')
  const [dailyModal, getDailyModal] = useState({
    temp_day: 10,
    day_info: '404',
    icon_id: '404',
    info: '404',
  })
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useCustomeDispatch();

  const [locStor, setLocStor] = useState(false)

  const chekLocalStor = () => {
    if (!localStorage.getItem("name")) {
      alert("Выберите домашний город(по умолчанию Москва)")

    }
    else {
      setLocStor(true)
      setCity(localStorage.name)
      setZip(localStorage.zip)
      dispatch(fetchCurrentWeather(localStorage.zip)).then((response) => {
        setLoading(false)

      }).catch((error) => {
        setLoading(true)
      })
      dispatch(fetchDailyWeather(localStorage.zip)).then((response) => {
        setLoading(false)
      })
    }
  }


  useEffect(
    () => {
      chekLocalStor()

    },
    [])
  const getNewCity = (name: string) => { setCity(name) }
  const getNewCityLoc = (name: string) => {
    setCity(name)
    localStorage.name = name
  }
  const getPostalCode=(zip: string) =>{
    setZip(zip)
    localStorage.zip = zip
  }

  const Reload=()=>{
    document.location.reload()
  }

  return (
    <div className="global-container">

      
          <Popup dailyModal={dailyModal} active={modalActive} setActive={setModaleActive} city={city} />
          <div className="container">

            <Header getNewCity={getNewCity} setActive={setActive} active={active} />
            {/* {loading
              ? */}
              {/* <Loading /> */}
              {/* : */}
              <Routes>
                <Route path="/" element={<Home city={city} setActive={setModaleActive} getDaily={getDailyModal} />} />
                <Route path="/month-statistics" element={<MonthStatisticse />} />
              </Routes>
            {/* } */}
          </div>
       



    </div>

  );
}

export default App;
