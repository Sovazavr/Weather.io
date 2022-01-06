import { useEffect } from "react";
import { useCustomeDispatch, useCustomeSelector } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { Days } from "../Days/Days";
import s from './Home.module.scss'
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

interface Props {
    city: string
}

export const Home = ({city}: Props) => {
    
    const dispatch=useCustomeDispatch();
    const {weather}=useCustomeSelector((state)=>state.currentWeatherSliceReducer)
    

    useEffect(() => {
        dispatch(fetchCurrentWeather(city));
        
      }, []);

    

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather} city={city}/>
                <ThisDayInfo weather={weather}/>

            </div>
            <Days />
        </div>
    )
}