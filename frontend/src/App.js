import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import User from 'views/User';

import Home from 'viewsdeep/Home';
import UserLayout from 'layouts/UserLayout.js';
import CompanyLayout from 'layouts/CompanyLayout.js'
import NoteState from 'context/notes/NoteState';
import Login from 'viewsdeep/Login';


function App() {

   
  const [loged , setLoged] = useState(false);
  const [logType , setLogtype] = useState(null);
  const [data , setData] = useState(null);

  const handleData= (data)=>{
    setData(data);
    console.log(data);
  }

  const handleLogged=(type)=>{
    setLoged(true);
    setLogtype(type);

  }
// console.log(loged);
// console.log(logType)

 const handleLogOut = ()=>{
  
  setLoged(false);
  setLogtype(null);
 }

  return (
    <>
   
    <BrowserRouter>
    {/* <AdminLayout/> */}
    {/* <Home/> */}
    <NoteState>
    <Routes>
    <Route path='/user-layout/*' element={<UserLayout handleLogged={handleLogOut} data = {data} />}/>
  <Route path="/admin/*" element={<AdminLayout handleLogged={handleLogOut} data ={data} />} />
  <Route path='/company-layout/*' element={<CompanyLayout handleLogged={handleLogOut} data={data} />}/>
  <Route path='/login' element={<Login /> }/>
  <Route path='/*' element = {<Home handleLogged = {handleLogged} handleData = {handleData} />}/>
  // {/* <Route path="/*" element={loged ? (
  //           logType === 'admin' ? <Navigate to="/admin/dashboard" /> :
  //           logType === 'student' ? <Navigate to="/user-layout/user" /> :
  //           logType === 'company' ? <Navigate to="/company-layout/company-profile" /> :
  //           <Navigate to="/" />
  //         ) : <Home handleLogged = {handleLogged} handleData = {handleData} />} /> */}
  // {/* <Route path='*' element= {<Navigate to="/" replace/>}/> */}
  //  {/* <Route path="*" element={<Navigate to="/user-layout/user" replace />} /> */}
  // {/* <Route path="*" element={<Navigate to="/admin/dashboard" replace />} /> */}
  // // {/* <Route path="*" element={<Navigate to="/company-layout/company-profile" replace />} /> */}
   
         
</Routes>
</NoteState>
  </BrowserRouter>
  </>
  )
}

export default App
