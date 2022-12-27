import React from 'react'
import Nav from './Nav'
import Title from './Title'

const Mainpagelayout = ({children}) => {
  return (
    <div>
    <Title title="Box Office" subtitle="Are you looking for a movive or an actor" />
      <Nav />
      {
        children
      }
    </div>
  )
}

export default Mainpagelayout
