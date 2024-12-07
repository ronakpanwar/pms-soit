import React ,{useContext, useState} from "react";
import AddCompany from "views/AddCompany.js";
import User  from "../views/User.js";
import noteContext from "context/notes/noteContext.js";

import TablesCom from "../views/TablesCom.js";
import TablesOp from "../views/TablesOp.js";
import UpdatePassword from "../views/UpdatePassword.js";
import UpdateStudent from "../views/UpdateStudent.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import userImage from 'user.png';
import Sidebar from "../components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import Uroutes from "../Uroutes.js";
import AppliedStudent from "views/AppliedStudent.js";
import { useSelector } from "react-redux";
import DetailJob from "../views/DetailJob.js";

var ps;

function Dashboard(props) {
  
  const context = useContext(noteContext);


  
 
  console.log(props.data)
  
const navigate = useNavigate();

const {user} = useSelector(store=>store.user)
if(user?.role !== 'student' || user === null){
  navigate('/')
 }

  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const state = "/user-layout/profile";
  const Name = user?.fullname;
  const Image = user?.profile?.profileImg || userImage
  const mainPanel = React.useRef();
  const location = useLocation();
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

  return (
    
    <div className="wrapper ">
     
     <DemoNavbar
       Image= {Image}
       state = {state}
       Name = {Name}
        /> 
      <Sidebar
        {...props}
        Image = {Image}
        state = {state}
        Name = {Name}
        routes={Uroutes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleLogOut = {props.handleLogged}
      />
      <div className="main-panel" ref={mainPanel}>
        {/* <DemoNavbar {...props} /> */}
        <Routes>
               <Route path='/detail-job' element= {<DetailJob/>}/>
              <Route path="/profile" element = {<User/>}/>
              <Route path="/update-student" element = {<UpdateStudent/>}/>
              <Route path="/table-op" element={<TablesOp Name={Name}/>} />
              <Route path="/tables-com" element={<TablesCom/>} />
              <Route path="/updatepassword" element={<UpdatePassword/>} />
              <Route path="/applied-student" element={<AppliedStudent/>}/>
             
\
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

