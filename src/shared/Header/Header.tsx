

import { useEffect } from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext'
import { useCustomeDispatch } from '../../hooks/store'
import { useTheme } from '../../hooks/useTheme'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import s from './Header.module.scss'
import { fullCity } from '../../assets/cityData/output'

interface Props {
    getNewCity: any
}



export const Header = ({ getNewCity }: Props) => {

    const theme = useTheme()

    const mas=fullCity.map((i:any)=>{
        return({value: i.postal_code, label: i.address})
    })

    console.log(mas)


    const options = [
        { value: '190000', label: 'Санкт-Петербург' },
        { value: '101000', label: 'Москва' },
        { value: '656000', label: 'Барнаул' },
        { value: '658280', label: 'Новоегорьевское' },
        { value: '658200', label: 'Рубцовск' },
        { value: '659300', label: 'Бийск' },
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px', heigth: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,

        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }
    const dispatch = useCustomeDispatch();

    const loadCity = (e: any) => {
        getNewCity(e?.label)
        dispatch(fetchCurrentWeather(e?.value))
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select
                    defaultValue={mas[0]}
                    styles={colourStyles}
                    options={mas}
                    onChange={loadCity}
                />
            </div>
        </header>
    )
}
