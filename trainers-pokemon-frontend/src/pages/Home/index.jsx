import React from 'react'
import SearchBar from './../../components/SearchBar'
import ListCard from './../../components/ListCard'
import Card from './../../components/Card'

const Home = () => {

  const trainers = [
    {name: 'Ash', team: [], rank: '', region: ''},
    {name: 'Misty', team: [], rank: '', region: ''},
    {name: 'Brock', team: [], rank: '', region: ''}
  ]
  return (
    <>
    <SearchBar />
    <ListCard>
      {
      trainers.map((element, index) => {
        return(
          <Card 
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