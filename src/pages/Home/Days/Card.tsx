import React from 'react'
import { GlobalSvgSelector } from '../../../assets/images/icons/global/GlobalSvgSelector';
import { Popup } from '../../../shared/Popup/Popup';
import { Day } from './Days'
import s from './Days.module.scss'

interface Props {
    dayInfo: Day,
    setActive: any,
    getDaily: any,
}

export const Card = ({ dayInfo, setActive, getDaily }: Props) => {
    const { day, day_info, icon_id, temp_day, info, } = dayInfo;
    function handleClick() {
        setActive(true)
        getDaily(dayInfo)
    }
    return (
        
            <div className={s.card} onClick={handleClick}>
                <div className={s.card_text}>
                    <div className={s.day}>{day}</div>
                    <div className={s.day_info}>{day_info}</div>

                    <div className={s.temp_day}>{temp_day}</div>

                    <div className={s.info}>{info}</div>
                </div>
                <div className={s.img}>
                    <GlobalSvgSelector id={'small' + icon_id} />
                </div>
            </div>

        
    )
}
