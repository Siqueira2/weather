import "@/styles/components/CapitalsWeather/capitalsWeather.scss";

import { useEffect } from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import { fetchWeather } from "@/slices/weatherSlice";

import { capitalsCoordinates } from "@/static/capitals";

const CapitalsWeather = () => {
  const dispatch = useAppDispatch();
  const weathers = useAppSelector((state) => state.weatherReducer.weathers);

  useEffect(() => {
    capitalsCoordinates.forEach((coordinates) => {
      dispatch(fetchWeather(coordinates));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Capitais</h2>

      {weathers &&
        weathers.map((capital) => <div key={capital.id}>{capital.name}</div>)}
    </div>
  );
};

export default CapitalsWeather;
