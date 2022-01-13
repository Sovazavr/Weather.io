import React from 'react'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import s from './Popup.module.scss'

interface Props {
    active:any,
    setActive: any,
    dailyModal: any,
    city: string,
}

export const Popup = ({active,setActive,dailyModal, city}: Props) => {
    const paskal = 0.750063755
    const pressure =dailyModal.pressure


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
    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: dailyModal.temp_day+'° - ощущается как '+dailyModal.feels_like+'°'
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: `${Math.floor(pressure * paskal)} мм ртутного столба`
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: dailyModal.info
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value:Math.floor(dailyModal.speed)==0 ? 'штиль' : `${Math.floor(dailyModal.speed)} м/с ${azimut(dailyModal.deg)}`
    },
    ]
   

    return (
        <>
            <div className={active ? s.blur_active: s.blur} onClick={()=>setActive(false)}></div>
            <div className={active ? s.popup_active: s.popup} onClick={e=>e.stopPropagation()}>
                <div className={s.day} >
                    <div className={s.day_temp}>{dailyModal.temp_day}</div>
                    <div className={s.day_name}>{dailyModal.day_info}</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id={'small'+dailyModal.icon_id} />
                    </div>
                    {/* <div className={s.day_time}>Время: <span>21:00</span></div> */}
                    <div className={s.day_city}><span>{city}</span></div>
                </div>
                <div className={s.this_day_info_items}>
                    {items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />
                    )}
                </div>
                <div className={s.close} onClick={()=>setActive(false)}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    )
}
