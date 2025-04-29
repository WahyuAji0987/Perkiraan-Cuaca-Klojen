export const getWeatherIcon = (maxTemp: number, precipitation: number): string => {
  if (precipitation > 5) {
    return '🌧️';
  } else if (precipitation > 0) {
    return '🌦️';
  } else if (maxTemp > 30) {
    return '☀️';
  } else if (maxTemp > 25) {
    return '🌤️';
  } else {
    return '⛅';
  }
};

export const getPrecipitationDescription = (precipitation: number): string => {
  if (precipitation === 0) return 'Tidak ada hujan';
  if (precipitation < 2) return 'Hujan ringan';
  if (precipitation < 10) return 'Hujan sedang';
  if (precipitation < 20) return 'Hujan lebat';
  return 'Hujan sangat lebat';
};

export const getTemperatureColor = (temp: number): string => {
  if (temp > 32) return 'text-red-600';
  if (temp > 28) return 'text-orange-500';
  if (temp > 24) return 'text-yellow-500';
  if (temp > 20) return 'text-green-500';
  return 'text-blue-500';
};