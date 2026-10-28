import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import P1 from './components/InfoPerso'
import P2 from './components/Competences'
import P3 from './components/Experience'

function App() {
  return(
    <div className="portofolio-container">
    <P1></P1>
    <P2></P2>
    <P3></P3>
   </div> 
  )

  
}

export default App;
