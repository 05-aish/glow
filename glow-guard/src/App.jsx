import React from 'react';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="min-h-screen bg-floral-white flex justify-center">
      <div className="w-full max-w-[390px] relative overflow-hidden" >
        <Home/>
      </div>
    </div>
  )
}

export default App