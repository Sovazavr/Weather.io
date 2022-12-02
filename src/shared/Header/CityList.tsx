

import { useCustomeDispatch } from '../../hooks/store';
import { fetchCurrentWeather, fetchDailyWeather } from '../../store/thunks/fetchCurrentWeather';
import s from './Header.module.scss'



interface Props {
    filterCity: any,
    getNewCity: any,
    getPostalCode: any,
}



export const CityList = ({ filterCity, getNewCity, getPostalCode}: Props) => {

   
    const dispatch = useCustomeDispatch();
    

    const loadCity = () => {

        // getPostalCode(filterCity?.postal_code)

        getNewCity(filterCity?.address)
        dispatch(fetchCurrentWeather(filterCity?.postal_code))
        dispatch(fetchDailyWeather(filterCity?.postal_code))
    }
    return (
        <div onClick={() => loadCity()} className={s.elemCity}>
           {filterCity.address}
        </div>
    )
}