import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem'
import { Weather } from '../../../../store/types/types'

interface Props {
    weather: Weather
}
export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
    const paskal = 0.750063755
    const pressure = !weather.main.grnd_level ? weather.main.pressure : weather.main.grnd_level


    function azimut(grad: number) {
        if (grad > 335 || grad < 25)
            return "северный"
        else if (grad >= 25 && grad < 70)
            return "северо-восточный"
        else if (grad >= 70 && grad < 115)
            return "восточный"
        else if (grad >= 115 && grad < 160)
            return "юго-восточный"
        else if (grad >= 160 && grad < 205)
            return "южный"
        else if (grad >= 205 && grad < 250)
            return "юго-западный"
        else if (grad >= 250 && grad < 295)
            return "западный"
        else if (grad >= 295 && grad < 335)
            return "северо-западный"
    }
    const chekEnglish=(eng: string)=>{
        if (eng=='overcast clouds') {
            return 'Пасмурно'
        } else {
            return eng
        }
    }

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: `${Math.floor(pressure * paskal)} мм ртутного столба - нормальное`
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: chekEnglish(weather.weather[0].description)
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: `${Math.floor(weather.wind.speed) == 0 ? "штиль" : Math.floor(weather.wind.speed) + ' м/с ' + azimut(weather.wind.deg)}`
    },
    ]
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                {items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />
                )}
            </div>
            <img className={s.cloud_img} src={cloud} alt="" />
        </div>
    )
}
