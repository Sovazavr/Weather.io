import { LongWeather, Weather } from './../store/types/types';
import  { AxiosResponse } from "axios";
import api from '../axios'

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?zip=${city},ru&lang=ru`)
    }
}

export class WeatherLongService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<LongWeather>> {
        return api.get<LongWeather>(`/forecast?zip=${city},ru&lang=ru`)
    }
}