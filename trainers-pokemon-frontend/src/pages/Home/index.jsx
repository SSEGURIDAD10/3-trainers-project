import React, { useState, useEffect } from 'react'
import SearchBar from './../../components/SearchBar'
import ListCard from './../../components/ListCard'
import Card from './../../components/Card'
import getTrainers from '../../api/Trainers'

const Home = () => {

  const [numero, setNumero] = useState(0);
  const [trainers, setTrainers] = useState([]);

  // const trainers = [
  //   {id: 1, name: 'Ash', team: [], rank: '', region: ''},
  //   {id: 2, name: 'Misty', team: [], rank: '', region: ''},
  //   {id: 3, name: 'Brock', team: [], rank: '', region: ''}
  // ];

  const getData = async() => {
    setTrainers(await getTrainers());
  }

  const addNumber = () => {
    let newNumero = numero + 1;
    setNumero(newNumero)
  }

  // // 1.- Se ejecuta en cada render
  // useEffect(() => {
  //   console.log('useEffect sin condiciones');
  // });

  //   // 2.- Solo se ejecuta una vez
    useEffect(() => {
      console.log('useEffect con []');
      getData();
    }, []);

  //   // 3.- Se ejecuta cuando la condicion 1 cambia de valor (o las N condiciones)
  // useEffect(() => {
  //   console.log('useEffect con [condition1, condition2]');
  // }, [condition1, condition2]);

  return (
    <>
    <SearchBar />

    <div className='counter-container'>
      <button onClick={addNumber}>Incrementar</button>
      <span>El numero es: {numero}</span>
    </div>

    <ListCard>
      {
      trainers.map((element, index) => {
        return(
          <Card
            key={element.id}
            name={element.name}
          />
        )
      })
      }
    </ListCard>
    </>
  )
}

export default Home