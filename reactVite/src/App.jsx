import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ICardGallery from './components/ICardGallery'
import StateHandling from './components/StateHandling'
import SetColor from './components/SetColor'
import './App.css'

function App() {
 
  return (
    <div>
      {/* <h1>Welcome to React Vite</h1> */}
      {/* <ICardGallery /> */}
      {/* <StateHandling /> */}
      <SetColor />
    </div>
  )
}

export default App
