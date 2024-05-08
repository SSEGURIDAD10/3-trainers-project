import React from 'react'
import SearchBar from './../../components/SearchBar'
import ListCard from './../../components/ListCard'
import Card from './../../components/Card'

const Home = () => {
  return (
    <>
    <SearchBar />
    <ListCard>
      <Card name="Ash" />
    </ListCard>
    </>
  )
}

export default Home