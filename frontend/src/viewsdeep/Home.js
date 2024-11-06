import React from 'react'
import Login from './Login'

const Home = (props) => {
  return (
    <>
      <nav class="navbar bg-body-tertiary bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <div className="container" >
      <Login handleLogged = {props.handleLogged} handleData ={props.handleData} />
      </div>
    </>
  )
}

export default Home
