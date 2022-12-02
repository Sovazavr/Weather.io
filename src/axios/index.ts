import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
export const apiCityName=axios.create({
  baseURL: process.env.REACT_APP_API_CITY_URL,
});

apiCityName.interceptors.request.use(config=> {
  config.url = config.url + '&limit=1' + '&appid=' + process.env.REACT_APP_API_KEY;
  return config
})


api.interceptors.request.use(config => {
    config.url = 
    config.url + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY;
    return config
})

