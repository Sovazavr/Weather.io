
import { AxiosResponse } from 'axios';
import { Weather } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentWeather = {
    weather: Weather,
    isLoading: boolean;
    response: Response;
}

type Response = {
    status: number;
    message: string;
}

const initialState: CurrentWeather = {
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
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
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

    }
})


export default currentWeatherSlice.reducer