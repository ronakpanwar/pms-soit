
import React from "react";
import AddStudent from "../views/AddStudent.js";
import AddCompany from "views/AddCompany.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation } from "react-router-dom";
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

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  const state = "/admin/dashboard";
  const Name = "Admin";
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

  // console.log(admin.Astate.name);
 

  return (
    
    <div className="wrapper ">

      <DemoNavbar/> 
      <Sidebar
        {...props}
        state = {state}
        Name = {Name}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleLogOut = {props.handleLogged}
      />
      <div className="main-panel" ref={mainPanel}>
     
        <Routes>
           <Route path="/dashboard" element={ <Secondboard />}/>
           <Route path="/add-student" element={ <AddStudent />}/>
           <Route path="/tables" element={ <TableList  />}/>
           <Route path="/tablescom" element={ <TablesCom />}/>
           <Route path="/tablesop" element={ <TablesOp />}/>
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

