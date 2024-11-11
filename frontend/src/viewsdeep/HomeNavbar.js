import React from 'react'
import logo from '../logo.png'
import './Some.css'

const HomeNavbar = () => {
   
    return (
<div>
  <nav className="navbar navbar-light bg-white">
    <div className="container-fluid d-flex justify-content-center my-3">
      <img src={logo} alt="" height={100} />
    </div>
    <div className="d-flex align-items-center p-2 w-100 bg-light justify-content-start gap-3">
      <a
        href="/"
        className={`text-dark mx-4 fs-6 fs-sm-4 fs-md-3 fs-lg-2 text-decoration-none px-3 py-2 rounded link-hover ${window.location.pathname === '/' ? 'bg-primary text-white' : ''}`}
        style={{ transition: 'background-color 0.3s' }}
      >
        Home
      </a>
      <a
        href="/login"
        className={`text-dark fs-6 fs-sm-4 fs-md-3 fs-lg-2 text-decoration-none px-3 py-2 rounded link-hover ${window.location.pathname === '/login' ? 'bg-primary text-white' : ''}`}
        style={{ transition: 'background-color 0.3s' }}
      >
        Login
      </a>
    </div>
  </nav>
</div>


    )
}

export default HomeNavbar
