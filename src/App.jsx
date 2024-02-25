import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import MainContent from './Components/MainContent/MainContent'
import { BASE_URL } from './Utils/api'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = async () => {
    const res = await fetch(`${BASE_URL}all`)
    const data = await res.json()
    setCountries(data.slice(0,30))
    //console.log(data)
  }

  const getCountriesByName = async (name) => {
    const res = await fetch(`${BASE_URL}name/${name}`)
    const data = await res.json()
    setCountries(data.slice(0,30))
  }

  const getCountriesByRegion = async (region) => {
    const res = await fetch(`${BASE_URL}region/${region}`)
    const data = await res.json()
    setCountries(data.slice(0,30))
  }
  
  return (
    <div className = "App">
      
      {/* Header */}
      <Header/>

      {/* NavBar */}


      {/* MainContent */}
      <MainContent countries = {countries}/>
    </div>
  )
}

export default App
