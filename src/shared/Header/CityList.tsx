

import { useCustomeDispatch } from '../../hooks/store';
import { fetchCurrentWeather, fetchDailyWeather } from '../../store/thunks/fetchCurrentWeather';
import s from './Header.module.scss'



interface Props {
    filterCity: any,
    getNewCity: any,
}



export const CityList = ({ filterCity, getNewCity }: Props) => {

   
    const dispatch = useCustomeDispatch();
    

    const loadCity = () => {



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