export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
  };
  daily_units: {
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
  };
}

export interface WeatherDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  precipitation: number;
}