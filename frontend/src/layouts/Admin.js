
import React, { useEffect } from "react";
import AddStudent from "../views/AddStudent.js";
import AddCompany from "views/AddCompany.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TableList from "../views/Tables.js";
import TablesCom from "../views/TablesCom.js";
import TablesOp from "../views/TablesOp.js";
import UpdatePassword from "../views/UpdatePassword.js";
import Secondboard from "../views/Dashboard.js";
import SelectedStudent from "../views/SelectedStudent.js";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import Footer from "components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import NoteContext from "context/notes/noteContext.js";
import routes from "../routes.js";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableAdmin from "../views/TableAdmin.js";
import AddAdmin from "../views/AddAdmin.js";
import DetailJob from "../views/DetailJob.js";
import userImage from 'user.png';
import { setAllSelected, setCompanys, setStudents } from "../redux/userSlice.js";
import axios from "axios";
import { companyApi , userApi } from '../utils/utils';
import { applicationApi } from '../utils/utils';

var ps;

function Dashboard(props) {
  const navigate = useNavigate()

  const {user} = useSelector(store=>store.user)
  if(user?.role !== 'admin' || user === null){
    navigate('/')
   }
   
  
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  const state = "/admin/dashboard";
  const Name = user?.fullname;
  const layout = "Admin"
  const Image = user?.profile?.profileImg || userImage
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const admin = useContext(NoteContext);

  if(user?.role !== 'admin' || user === null){
   navigate('/')
  }


const dispatch = useDispatch()

useEffect(()=>{
  const getCompanys = async()=>{
    try {
      const res = await axios.get(`${companyApi}/get/all`,{
        withCredentials:true
      })
      if(res.data.success){
        dispatch(setCompanys(res.data.companys))
      }
    } catch (error) {
      console.log(error)
    }
  }
  getCompanys()
},[dispatch])
  


useEffect(()=>{
  const getAll = async()=>{
    try {
      const res = await axios.get(`${applicationApi}/all`, {
        withCredentials:true
      })
      if(res.data.success){
        dispatch(setAllSelected(res.data.applicants))
      }
    } catch (error) {
      console.log(error)
    }
  }
  getAll()
 }, [dispatch])

 useEffect(()=>{
  const getStudents = async()=>{
    try {
      const res = await axios.get(`${userApi}/get/student`, {
        withCredentials:true
      })
      if(res.data.success){
        dispatch(setStudents(res.data.students))
      }
    } catch (error) {
      console.log(error)
    }
  }
  getStudents()
},[dispatch])

  // console.log(admin.Astate.name);
 

  return (
    
    <div className="wrapper ">

      <DemoNavbar
       Image= {Image}
       state = {state}
       Name = {Name}
        /> 

      <Sidebar
        {...props}
        Image= {Image}
        state = {state}
        Name = {Name}
        layout = {layout}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleLogOut = {props.handleLogged}
      />
      <div className="main-panel" ref={mainPanel}>
     
        <Routes>
        <Route path="/admin-list" element={<TableAdmin/>}/>
        <Route path="/add-admin" element={<AddAdmin/>}/>
        <Route path="/detail-job" element={<DetailJob/>}/>
           <Route path="/dashboard" element={ <Secondboard />}/>
           <Route path="/add-student" element={ <AddStudent />}/>
           <Route path="/student-list" element={ <TableList  />}/>
           <Route path="/company-list" element={ <TablesCom />}/>
           <Route path="/opening-list" element={ <TablesOp />}/>
           <Route path="/s-student" element={ <SelectedStudent />}/>
           <Route path="/updatepassword" element={ <UpdatePassword admin = {admin} Name={Name} />}/>
           <Route path="/add-company" element={<AddCompany/>}/>
        </Routes>
        {/* <Footer fluid /> */}
      </div>
      {/* <FixedPlugin
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
  );
}

export default Dashboard;

