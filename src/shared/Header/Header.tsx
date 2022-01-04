
import { useEffect } from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext'
import { useCustomeDispatch } from '../../hooks/store'
import { useTheme } from '../../hooks/useTheme'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import s from './Header.module.scss'
interface Props {
    getNewCity: any
}



export const Header = ({getNewCity}: Props) => {

    const theme = useTheme()


    

    const options = [
        { value: 'Saint Petersburg', label: 'Санкт-Петербург' },
        { value: 'Moscow', label: 'Москва' },
        { value: 'Barnaul', label: 'Барнаул' },
        { value: 'Novoegorevkoe', label: 'Новоегорьевское' },

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
    const dispatch=useCustomeDispatch();
    
    const loadCity=(e: any) => {
        getNewCity(e?.label)
        dispatch(fetchCurrentWeather(e?.label))
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
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                    onChange={loadCity}
                />
            </div>
        </header>
    )
}
