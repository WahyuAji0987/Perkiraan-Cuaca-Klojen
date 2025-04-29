import { WeatherResponse, WeatherDay } from '../types/weatherTypes';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-7.973&longitude=112.6087&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FBangkok&forecast_days=3';

export const fetchWeatherData = async (): Promise<WeatherDay[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    const data: WeatherResponse = await response.json();
    
    return data.daily.time.map((date, index) => ({
      date,
      maxTemp: data.daily.temperature_2m_max[index],
      minTemp: data.daily.temperature_2m_min[index],
      precipitation: data.daily.precipitation_sum[index]
    }));
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};