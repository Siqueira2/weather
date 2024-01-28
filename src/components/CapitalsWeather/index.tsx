import "@/styles/components/CapitalsWeather/capitalsWeather.scss";

import { capitalsCoordinates } from "@/static/capitals";

import { useEffect } from "react";

import { fetchWeather } from "@/slices/weatherSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const CapitalsWeather = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    capitalsCoordinates.forEach((coordinates) => {
      dispatch(fetchWeather(coordinates));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Capitais</h2>
    </div>
  );
};

export default CapitalsWeather;
