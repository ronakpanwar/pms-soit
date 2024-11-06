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
import { Route, Routes, useLocation } from "react-router-dom";


import Sidebar from "../components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import Uroutes from "../Uroutes.js";
import AppliedStudent from "views/AppliedStudent.js";

var ps;

function Dashboard(props) {
  
  const context = useContext(noteContext);

  const [studentData , setStudentData] = useState(null);
  
 
  console.log(props.data)
  


  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const state = "/user-layout/user";
  const Name = "Student";
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
      <DemoNavbar/>
      <Sidebar
        {...props}
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
 
              <Route path="/user" element = {<User/>}/>
              <Route path="/update-student" element = {<UpdateStudent/>}/>
              <Route path="/table-op" element={<TablesOp Name={Name}/>} />
              <Route path="/tablescom" element={<TablesCom/>} />
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

