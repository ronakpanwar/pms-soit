import React from 'react'
import Login from './Login'

import HomeNavbar from './HomeNavbar'
import HomeContent from './HomeContent'

const Home = (props) => {
  return (
    <>
    <HomeNavbar/>
      <div className="container" >
       <HomeContent/>
      </div>
    </>
  )
}

export default Home
