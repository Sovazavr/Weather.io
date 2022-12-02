
import { AxiosResponse } from 'axios';
import { LongWeather, Weather, CityName } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentWeather = {
    daily: LongWeather,
    weather: Weather,
    isLoading: boolean,
    response: Response,
    cityNames: CityName,
}



type Response = {
    status: number;
    message: string;
}

const initialState: CurrentWeather = {
    cityNames: {
        list: [
            {
                local_names: {
                    ru: " ",
                }
            }
        ]
    },




    weather: {
        main: {
            temp: 404,
            feels_like: 404,
            pressure: 404,
            grnd_level: 404,
        },
        weather: [
            {
                id: 404,
                main: "",
                description: "",
                icon: "",
            }
        ],
        wind: {
            speed: 404,
            deg: 404,
        },
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
    daily: {
        list: [
            {
                dt: 404,
                main: {
                    temp: 404,
                    // night: '404',
                    feels_like: 404,
                    pressure: 404,
                    grnd_level: 404,
                },
                weather: [{
                    icon: 'string',
                    description: 'string',
                }],
                wind: {
                    deg: 404,
                    speed: 404,
                }
            }
        ],
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCityName(state, action: PayloadAction<AxiosResponse<CityName>>) {
            state.isLoading = false;
            state.cityNames = action.payload.data
        },
        fetchCityNameError(state, action: PayloadAction<AxiosResponse<CityName>>) {
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
            state.isLoading = false;
        },
        fetchCurrentWeather(state) {
            state.isLoading = true
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherDailySuccess(state, action: PayloadAction<AxiosResponse<LongWeather>>) {
            state.daily = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherDailyError(state, action: PayloadAction<AxiosResponse<LongWeather>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },

    }
})


export default currentWeatherSlice.reducer