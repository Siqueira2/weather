import "@/styles/components/CapitalsWeather/capitalsWeather.scss";

import { useEffect } from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import { fetchWeather } from "@/slices/weatherSlice";

import { capitalsCoordinates } from "@/static/capitals";

import CapitalWeatherItem from "@/components/CapitalsWeather/CapitalWeatherItem";

const CapitalsWeather = () => {
  const dispatch = useAppDispatch();
  const weathers = useAppSelector((state) => state.weatherReducer.weathers);

  useEffect(() => {
    capitalsCoordinates.forEach((coordinates) => {
      dispatch(fetchWeather(coordinates));
    });
  }, [dispatch]);

  return (
    <div className="section-container">
      <h2 className="title">Capitais</h2>

      <div className="list-header">
        <p>Max</p>

        <p>Min</p>
      </div>

      <ul className="list">
        {weathers &&
          weathers.map((capital) => (
            <CapitalWeatherItem key={capital.id} capital={capital} />
          ))}
      </ul>
    </div>
  );
};

export default CapitalsWeather;
