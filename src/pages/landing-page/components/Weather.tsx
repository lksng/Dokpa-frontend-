import React, { useEffect, useState } from "react";

interface WeatherData {
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    last_updated: string;
  };
  location: {
    name: string;
    region: string;
    country: string;
  };
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "1ea37dcf8a744e9f9ff151103250509"; // your key
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tawang&aqi=no`
        );
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data: WeatherData = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return (
      <div className="p-3 border border-[#007a60] rounded-lg shadow text-gray-600 w-full max-w-sm mx-auto bg-white/80 text-center text-sm">
        Loading weather...
      </div>
    );
  }

  return (
    <div className="p-3 bg-white/90 border border-[#007a60]/40 rounded-xl shadow-md w-full max-w-sm mx-auto">
      {/* Title */}
      <h2 className="text-sm font-bold mb-3 text-center text-[#007a60] uppercase tracking-wide">
        Tawang Weather
      </h2>

      {/* Condition */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="w-8 h-8"
        />
        <p className="text-xs text-gray-700">{weather.current.condition.text}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
          <span className="text-lg">🌡️</span>
          <p className="text-sm font-semibold">{weather.current.temp_c}°C</p>
          <span className="text-[10px] text-gray-500">Temp</span>
        </div>

        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
          <span className="text-lg">💧</span>
          <p className="text-sm font-semibold">{weather.current.humidity}%</p>
          <span className="text-[10px] text-gray-500">Humidity</span>
        </div>

        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
          <span className="text-lg">💨</span>
          <p className="text-sm font-semibold">{weather.current.wind_kph} kph</p>
          <span className="text-[10px] text-gray-500">Wind</span>
        </div>
      </div>

      {/* Extra info small */}
      <div className="mt-3 text-center text-[10px] text-gray-500">
        Feels like {weather.current.feelslike_c}°C • Updated {weather.current.last_updated}
      </div>
    </div>
  );
};

export default Weather;
