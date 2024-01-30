import "@/styles/components/CapitalsWeather/capitalsWeather.scss";

import { Weather } from "@/interface/Weather";

type Props = { capital: Weather };

const CapitalWeatherItem = ({ capital }: Props) => {
  const formatTemperature = (temp: number): string => {
    const formatted = Math.round(temp).toString().slice(0, 2);

    return `${formatted}°C`;
  };

  return (
    <li className="list-item">
      <span>{formatTemperature(capital.main.temp_max)}</span>

      <span>{formatTemperature(capital.main.temp_min)}</span>

      <p>{capital.name}</p>
    </li>
  );
};

export default CapitalWeatherItem;
