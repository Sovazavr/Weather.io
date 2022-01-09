export type Weather = {
  main: {
    temp: number;
    feels_like: number,
    pressure: number,
    grnd_level: number,
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string,
    }
  ],
  wind: {
    speed: number,
    deg: number,
  },
}

export type LongWeather = {
  list: [
    {
      dt: number,
      main: {
        temp: number,
      },
      weather:[ {
        icon: string,
        description: string,
      }]
    }
  ]
}

