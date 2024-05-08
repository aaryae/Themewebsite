import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contactus from './components/Contactus'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Service from './components/Service'
import MyContext from './contextapi/context'

interface ContextValue {
  mode: string;
}

function App() {

  const [mode, setmode] = useState<string>('');
  return (

    <>
      <MyContext.Provider value={{ mode,setmode }}>
        <div className='back'>
          <Navbar />
          <Herosection />
        </div>
        <About />
        <Service />
        <Contactus />
      </MyContext.Provider>
    </>

  )
}

export default App;
