import React from 'react'
import { GlobalSvgSelector } from '../../../assets/images/icons/global/GlobalSvgSelector';
import { Day } from './Days'
import s from './Days.module.scss'

interface Props {
    dayInfo: Day;
}

export const Card = ({ dayInfo }: Props) => {
    const { day, day_info, icon_id, temp_day, temp_night, info, } = dayInfo;
    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp_day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}
