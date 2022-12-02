import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherLongService, WeatherService } from './../../services/weatherSerwice';
import { AppDispath } from './../store';

export const fetchCurrentWeatherLatLon = (payload: {lat: string, lon: string}) => async (dispath: AppDispath) => {
    try {
        dispath(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeatherLatLon(payload)
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

export const fetchCurrentCity = (payload: {lat: string, lon: string}) => async (dispath: AppDispath) => {
    try {
        dispath(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCityName(payload)
        if (res.status === 200) {
            dispath(currentWeatherSlice.actions.fetchCityName(res))
        } else {
            dispath(currentWeatherSlice.actions.fetchCityNameError(res))
        }
    }
    catch (error) {
        console.log(error)
    }

}

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
export const fetchDailyWeatherLatLon = (payload: {lat: string, lon: string}) => async (dispath: AppDispath) => {
    try {
        dispath(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherLongService.getCurrentWeatherLatLon(payload)
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