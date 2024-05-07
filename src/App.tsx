
import './App.css'
import About from './components/About'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='back'>
        <Navbar />
        <Herosection />
      </div>
      <About />
    </>
  )
}

export default App
