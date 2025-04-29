import React from 'react';
import { Thermometer, Droplets } from 'lucide-react';
import { WeatherDay } from '../types/weatherTypes';
import { formatDate, getDayName } from '../utils/dateUtils';
import { getWeatherIcon, getPrecipitationDescription, getTemperatureColor } from '../utils/weatherUtils';

interface WeatherCardProps {
  day: WeatherDay;
  index: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ day, index }) => {
  const { date, maxTemp, minTemp, precipitation, tempUnit, precipUnit } = day;
  const weatherIcon = getWeatherIcon(maxTemp, precipitation);
  const precipDescription = getPrecipitationDescription(precipitation);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
      style={{
        animation: `fadeIn 0.5s ease-out forwards`,
        animationDelay: `${index * 0.2}s`,
        opacity: 0,
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold">{getDayName(date)}</h3>
            <p className="text-gray-600 text-sm">{formatDate(date)}</p>
          </div>
          <div className="text-5xl">{weatherIcon}</div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Thermometer className="h-5 w-5 mr-2 text-red-500" />
            <div>
              <p className="text-gray-700">Suhu</p>
              <p className="font-semibold">
                <span className={getTemperatureColor(maxTemp)}>{maxTemp}{tempUnit}</span> / 
                <span className={getTemperatureColor(minTemp)}> {minTemp}{tempUnit}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Droplets className="h-5 w-5 mr-2 text-blue-500" />
            <div>
              <p className="text-gray-700">Curah Hujan</p>
              <p className="font-semibold">{precipitation} {precipUnit}</p>
              <p className="text-sm text-gray-600">{precipDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;