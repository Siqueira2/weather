import axios, { AxiosResponse } from "axios";

import { Weather } from "@/interface/Weather";
import { Params } from "@/interface/API";

const fetchCurrentWeather = async ({ lat, lon }: Params): Promise<Weather> => {
  try {
    const { data }: AxiosResponse<Weather> = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f3f4ed9f55611123540b1faf62d5fd9`
    );

    return data;
  } catch (error) {
    throw new Error("Error");
  }
};

export default fetchCurrentWeather;
