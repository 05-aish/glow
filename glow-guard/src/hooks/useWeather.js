import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../backend/weatherApi';

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try{
                    const { latitude, longitude} = position.coords;
                    const data = await fetchWeatherData(latitude, longitude);
                    setWeather(data)
                }
                catch(err){
                    setError('Failed to fetch weather data');
                }
                finally{
                    setLoading(false);
                }
            },
            (err) => {
                setError('Location access denied');
                setLoading(false);
            }
        )
    },[]);

    return { weather, loading, error };
}

export default useWeather;