import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './services/weatherService';
import { WeatherDay } from './types/weatherTypes';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDay[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchWeatherData();
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    getWeatherData();
  }, []);
  
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">3-Day Weather Forecast</h1>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Max Temp (°C)</th>
                <th className="px-6 py-3 text-left">Min Temp (°C)</th>
                <th className="px-6 py-3 text-left">Precipitation (mm)</th>
                <th className="px-6 py-3 text-left">Rain Probability (%)</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.map((day) => (
                <tr key={day.date} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</td>
                  <td className="px-6 py-4">{day.maxTemp.toFixed(1)}</td>
                  <td className="px-6 py-4">{day.minTemp.toFixed(1)}</td>
                  <td className="px-6 py-4">{day.precipitation.toFixed(1)}</td>
                  <td className="px-6 py-4">{Math.min(100, Math.round(day.precipitation * 20))}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="text-center mt-8 text-sm text-gray-600">
          Dibuat oleh Wahyu Setianto Dwi Aji - Integrasi API OpenMeteo 2025
        </footer>
      </div>
    </div>
  );
}

export default App;