import React from 'react';
import WeatherCard from './WeatherCard';
import { WeatherDay } from '../types/weatherTypes';

interface WeatherDisplayProps {
  weatherData: WeatherDay[];
  isLoading: boolean;
  error: string | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Memuat data cuaca...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-500 mb-2">Gagal memuat data cuaca</p>
        <p className="text-gray-600">{error}</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => window.location.reload()}
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {weatherData.map((day, index) => (
        <WeatherCard key={day.date} day={day} index={index} />
      ))}
    </div>
  );
};

export default WeatherDisplay;