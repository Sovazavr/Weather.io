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
          icon: string
        }
      ],
      wind: {
        speed: number,
        deg: number,
      },
}

