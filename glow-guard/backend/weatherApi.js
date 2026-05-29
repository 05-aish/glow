export const fetchWeatherData = async (lat, lon) => {
    try {
        const [weatherRes, aqiRes] = await Promise.all([
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,apparent_temperature&hourly=uv_index&timezone=auto&forecast_days=1`),
            fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`)
        ])

        const weatherData = await weatherRes.json()
        const aqiData = await aqiRes.json()

        const currentHour = new Date().getHours()
        const uv = weatherData.hourly.uv_index[currentHour]
        const temp = weatherData.current.temperature_2m
        const humidity = weatherData.current.relative_humidity_2m
        const weatherCode = weatherData.current.weather_code
        const apparentTemp = weatherData.current.apparent_temperature
        const aqi = aqiData.current.european_aqi


        const uvLevel = uv <= 3 ? 'low' : uv <= 5 ? 'moderate' : uv <= 7 ? 'high' : 'extreme'

        return { uv, temp, humidity, weatherCode, aqi, uvLevel, apparentTemp }

    } catch (err) {
        console.error('Weather fetch error:', err)
        throw err
    }
}