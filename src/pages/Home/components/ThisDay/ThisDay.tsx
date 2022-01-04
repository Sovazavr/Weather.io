import React from 'react'

import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'

import s from './ThisDay.module.scss'

interface Props {
    weather: Weather,
    city: string
}

export const ThisDay = ({weather, city}: Props) => {
    

    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.this_block_wrapper}>
                    <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this_day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun"/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>Время: <span>{}</span></div>
                <div className={s.this_city}>Город: <span></span>{city}</div>
            </div>
        </div>
    )
}
