import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherLongService, WeatherService } from './../../services/weatherSerwice';
import { AppDispath } from './../store';

export const fetchCurrentWeather = (payload: string) => async (dispath: AppDispath) => {
    try {
        dispath(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)
        if (res.status === 200) {
            dispath(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispath(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    }
    catch (error) {
        console.log(error)
    }

}

export const fetchDailyWeather = (payload: string) => async (dispath: AppDispath) => {
    try {
        dispath(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherLongService.getCurrentWeather(payload)
        if (res.status === 200) {
            dispath(currentWeatherSlice.actions.fetchCurrentWeatherDailySuccess(res))
        } else {
            dispath(currentWeatherSlice.actions.fetchCurrentWeatherDailyError(res))
        }
    }
    catch (error) {
        console.log(error)
    }

}