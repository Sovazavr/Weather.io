import React, { useEffect } from "react";
import { useCustomeDispatch, useCustomeSelector } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { Days } from "../Days/Days";
import s from './Home.module.scss'
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

interface Props {

}

export const Home = (props: Props) => {

    const dispatch=useCustomeDispatch();
    const {weather}=useCustomeSelector((state)=>state.currentWeatherSliceReducer)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'));
      }, []);

    

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo />

            </div>
            <Days />
        </div>
    )
}