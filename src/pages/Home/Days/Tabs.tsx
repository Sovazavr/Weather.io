import React, { useEffect } from 'react'
import s from './Days.module.scss'
interface Props {
    getNewCount: any
}
export interface Tab {
    value: string,
    action: string,
    key: number,
}

export const Tabs = ({ getNewCount }: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю',
            action: 'week',
            key: 6,
        },
        {
            value: 'На 14 дней',
            action: 'twoWeek',
            key: 13,
        },
        {
            value: 'На 35 дней',
            action: 'fiveWeek',
            key: 34,
        },


    ]

    const changeClass = (e: any) => {
        let foo = document.querySelectorAll("div");

        for (let i = 0; i < foo.length; i++) {
            foo[i].classList.remove(s.active);
        }

        e.currentTarget.classList.add(s.active);
    }
   

    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map((tab: Tab) =>
                    <div className={s.tab} onClick={changeClass} key={tab.key}>{tab.value}</div>
                )}
                
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}
