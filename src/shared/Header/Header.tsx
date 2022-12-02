

import { useState } from 'react'

import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext'

import { useTheme } from '../../hooks/useTheme'

import s from './Header.module.scss'
import { fullCity } from '../../assets/cityData/output'
import { CityList } from './CityList'

interface Props {
    getNewCity: any,
    setActive: any,
    active: boolean,
}



export const Header = ({ getNewCity, setActive, active }: Props) => {
    const [valueInp, setValueInp] = useState('')
    const [focus, setFocus] = useState(false)
    
    const theme = useTheme()



    //Закоментированное использовалось для react-select компонента, теперь не нужно так-как сделал свое + производительней
    // loadCity нужен будет для выбора нового населенного пункта

    const handleInputFocus = () => {
        setFocus(true)
        setActive(true)
        
         
    };

    const handleInputBlur = () => {
        setFocus(false)
        setActive(false)
    };



    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const onChangeInp = (element: string) => {
        setValueInp(element)
    }

    const filteredCitys = fullCity.filter(city => {
        return city.address.toLowerCase().includes(valueInp.toLowerCase())
    })

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>Weather Project</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <div className={s.searchBox}>
                    <input placeholder='Поиск населенного пункта' type="text" onFocus={handleInputFocus} onBlur={handleInputBlur} value={valueInp} onChange={(e) => onChangeInp(e.target.value)} />
                    {
                        
                            <div className={active ? s.listPopup_active: s.listPopup}>
                                {filteredCitys.map((filterCity) => <CityList
                                    getNewCity={getNewCity}
                                    filterCity={filterCity}
                                    getPostalCode={null} />)}
                            </div>
                        
                    }
                </div>
                {// <Select
                    //     defaultValue={[{ value: '-----', label: '-----' }]}
                    //     styles={colourStyles}
                    //     options={mas}
                    //     onChange={loadCity}/>
                }

            </div>
        </header>
    )
}
