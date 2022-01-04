import React from 'react'
import s from './Days.module.scss'
interface Props {

}
export interface Tab {
    value: string;
}

export const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю'
        },
        {
            value: 'На 10 дней'
        },
        {
            value: 'На месяц'
        },


    ]
    const changeClass=(e: any) => {
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
                    <div className={s.tab} onClick={changeClass} key={tab.value}>{tab.value}</div>
                )}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}
