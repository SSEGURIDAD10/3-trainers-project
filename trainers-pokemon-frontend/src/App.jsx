// import { useState } from 'react'
import './App.css'
import Card from './../../trainers-pokemon-frontend/src/components/Card'
import ListCard from './../../trainers-pokemon-frontend/src/components/ListCard'
import Home from './pages/Home'
import DetailTrainer from './pages/DetailTrainer'
import FormTrainers from './pages/FormTrainers'
import NotFound from './pages/NotFound'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hola</h1>
    <ListCard />
    <Card />
    <Home />
    <DetailTrainer />
    <FormTrainers />
    <NotFound />
    </>
  )
}

export default App
