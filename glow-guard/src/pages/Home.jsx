import React from 'react'
import Hero from '../components/Hero'
import TipCard from '../components/TipCard'
import Chatbot from '../components/Chatbot'
import useWeather from '../hooks/useWeather'

const Home = () => {
    const { weather, loading, error } = useWeather();

    if(loading){
        return <div className="font-raleway text-wisteria text-center mt-40">Loading your glow report...</div>
    }

    if(error){
       return <div className="font-raleway text-wisteria text-center mt-40">{error} :(</div> 
    }
    return (
    <div className="min-h-screen bg-floral-white">
        <Hero uvLevel={weather.uvLevel} uvIndex={weather.uv}/>
        <TipCard/>
        <Chatbot/>
    </div>
    )
}

export default Home;