import React from 'react'
import SearchBar from './../../components/SearchBar'
import ListCard from './../../components/ListCard'
import Card from './../../components/Card'
import getTrainers from '../../api/Trainers'

const Home = () => {

  const trainers = [
    {id: 1, name: 'Ash', team: [], rank: '', region: ''},
    {id: 2, name: 'Misty', team: [], rank: '', region: ''},
    {id: 3, name: 'Brock', team: [], rank: '', region: ''}
  ];

  // getTrainers();

  return (
    <>
    <SearchBar />
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