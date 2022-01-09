import React from 'react'
import { LongWeather } from '../../../store/types/types'
import { Card } from './Card'
import s from './Days.module.scss'
import { Tabs } from './Tabs'

interface Props {
    daily: LongWeather,
}
export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: number;
    temp_night: string;
    info: string;
}
export const Days = ({daily}: Props) => {
    const date=new Date()
    const month=date.toLocaleDateString('default', { month: 'short' })
    const days: Day[]=[
        {
            day: 'Сегодня',
            day_info: date.getDate()+' '+month,
            icon_id: 'sun',
            temp_day: 404,
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Завтра',
            day_info: '29 ' +month,
            icon_id: 'small_rain_sun',
            temp_day: 404,
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
          },
          {
            day: 'Ср',
            day_info: '30 '+month,
            icon_id: 'small_rain',
            temp_day: 404,
            temp_night: '+15',
            info: 'небольшой дождь',
          },
          {
            day: 'Чт',
            day_info: '28 '+month,
            icon_id: 'mainly_cloudy',
            temp_day: 404,
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Пт',
            day_info: '28 '+month,
            icon_id: 'rain',
            temp_day: 404,
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Сб',
            day_info: '28 '+month,
            icon_id: 'sun',
            temp_day: 404,
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Вс',
            day_info: '28 '+month,
            icon_id: 'sun',
            temp_day: 404,
            temp_night: '+15',
            info: 'Облачно',
          },
    ]
    var getTomorrow = function(now:Date, offset: number){
      
      return new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + offset,
          now.getHours(),
          now.getMinutes(),
          now.getSeconds());
    };
    
    if(daily.list.length>1){
      const arr=daily.list
      for(var i=0; i<=6; i++) {
        var tomorrow = getTomorrow(date, i);
        days[i].day=tomorrow.toLocaleDateString('default', {weekday: 'short' })
        days[i].day_info=tomorrow.getDate()+' '+tomorrow.toLocaleDateString('default', {month: 'short'})
        days[i].temp_day=Math.floor(arr[i].main.temp)
        days[i].icon_id=arr[i].weather[0].icon
        days[i].info=arr[i].weather[0].description
      }
    }
    
    return (
        <>
        <Tabs/>
        <div className={s.days} >
            {days.map(
                (day: Day)=><Card dayInfo={day} key={day.day}/>
            )}
        </div>
        </>
    )
}
