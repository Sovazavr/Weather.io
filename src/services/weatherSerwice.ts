import { CityName, LongWeather, Weather } from './../store/types/types';
import  { AxiosResponse } from "axios";
import {api, apiCityName} from '../axios'

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?zip=${city},ru&lang=ru`)
    }
    static getCurrentWeatherLatLon(coord: {lat: string, lon: string}): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?lat=${coord.lat}&lon=${coord.lon}`)
    }
    static getCityName(coord: {lat: string, lon: string}): Promise<AxiosResponse<CityName>> {
        return apiCityName.get<CityName>(`/reverse?lat=${coord.lat}&lon=${coord.lon}&limit=1`)
    }
}

export class WeatherLongService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<LongWeather>> {
        return api.get<LongWeather>(`/forecast?zip=${city},ru&lang=ru`)
    }
    static getCurrentWeatherLatLon(coord: {lat: string, lon: string}): Promise<AxiosResponse<LongWeather>> {
        return api.get<LongWeather>(`/forecast/daily?lat=${coord.lat}&lon=${coord.lon},ru&lang=ru`)
    }
}