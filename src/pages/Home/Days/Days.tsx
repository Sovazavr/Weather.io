import React, { useEffect, useState } from 'react'
import { LongWeather } from '../../../store/types/types'
import { Card } from './Card'
import s from './Days.module.scss'
import { Tabs } from './Tabs'

interface Props {
  daily: LongWeather,
  setActive: any,
  getDaily: any,
}
export interface Day {
  feels_like: number;
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: number;
  
  info: string;
  pressure: number;
  speed: number;
  deg: number;
}
export const Days = ({ daily, getDaily, setActive }: Props) => {
  const date = new Date()
  const month = date.toLocaleDateString('default', { month: 'short' })
  const days: Day[] = [
    {
      feels_like: 404,
      day: 'Сегодня',
      day_info: date.getDate() + ' ' + month,
      icon_id: 'sun',
      temp_day: 404,
      
      info: 'Облачно',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Завтра',
      day_info: '29 ' + month,
      icon_id: 'small_rain_sun',
      temp_day: 404,
      
      info: 'небольшой дождь и солнце',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Ср',
      day_info: '30 ' + month,
      icon_id: 'small_rain',
      temp_day: 404,
      
      info: 'небольшой дождь',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Чт',
      day_info: '28 ' + month,
      icon_id: 'mainly_cloudy',
      temp_day: 404,
      
      info: 'Облачно',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Пт',
      day_info: '28 ' + month,
      icon_id: 'rain',
      temp_day: 404,
      
      info: 'Облачно',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Сб',
      day_info: '28 ' + month,
      icon_id: 'sun',
      temp_day: 404,
      
      info: 'Облачно',
      pressure: 404,
      speed: 404,
      deg: 404,
    },
    {
      feels_like: 404,
      day: 'Вс',
      day_info: '28 ' + month,
      icon_id: 'sun',
      temp_day: 404,
      
      info: 'Облачно',
      pressure: 404,
      speed: 404,
      deg: 404,
    },

  ]

  var getTomorrow = function (now: Date, offset: number) {

    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + offset,
      now.getHours(),
      now.getMinutes(),
      now.getSeconds());
  };
  if (daily.list.length > 1) {
    const arr = daily.list
    for (var i = 0; i <= 6; i++) {
      var tomorrow = getTomorrow(date, i);
      days[i].day = tomorrow.toLocaleDateString('default', { weekday: 'short' })
      days[i].day_info = tomorrow.getDate() + ' ' + tomorrow.toLocaleDateString('default', { month: 'short' })
      days[i].temp_day = Math.floor(arr[i].main.temp)
      days[i].icon_id = arr[i].weather[0].icon
      days[i].info = arr[i].weather[0].description
      days[i].feels_like = Math.floor(arr[i].main.feels_like)
      days[i].pressure = !arr[i].main.grnd_level ? arr[i].main.pressure : arr[i].main.grnd_level
      days[i].speed=arr[i].wind.speed
      days[i].deg=arr[i].wind.deg
    }
  }

  // function changeDay(counter: number) {
  //   if (daily.list.length > 1) {
  //     const arr = daily.list
  //     for (var i = 0; i <= counter; i++) {
  //       var tomorrow = getTomorrow(date, i);

  //       days[i].day = tomorrow.toLocaleDateString('default', { weekday: 'short' })
  //       days[i].day_info = tomorrow.getDate() + ' ' + tomorrow.toLocaleDateString('default', { month: 'short' })
  //       days[i].temp_day = Math.floor(arr[i].main.temp)
  //       days[i].icon_id = arr[i].weather[0].icon
  //       days[i].info = arr[i].weather[0].description
  //     }
  //   }
  // }
  console.log(daily)

  return (
    <>
      {/* <Tabs getNewCount={undefined} /> */}

      <div className={s.days} >
        {days.map(
          (day: Day) => <Card dayInfo={day} getDaily={getDaily} setActive={setActive} key={day.day} />
        )}
      </div>
    </>
  )
}
