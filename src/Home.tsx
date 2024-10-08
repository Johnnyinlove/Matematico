// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import Slider from './Slider'
import Contrasena from './Contrasena'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <div className='App'>

    <Nav/>
    <Slider/>
    <Contrasena/>
    <Footer/>
    
    </div>
    
    </>
  )
}

export default App
