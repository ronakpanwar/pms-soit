import React from "react";
import AddStudent from "../views/AddStudent.js";
import AddCompany from "views/AddCompany.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateJob from "views/CreateJob.js";
import Applications from "views/Applications.js";
import SelectedStudent from "views/SelectedStudent.js";
import UpdatePassword from "views/UpdatePassword.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import userImage from 'user.png';
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import Footer from "components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import croutes from "../croutes.js";
import CompanyProfile from "views/CompanyProfile.js";
import { useSelector } from "react-redux";
import UpdateCompanyProfile from "../views/UpdateCompanyProfile.js";
import CompanyJobs from "../views/CompanyJobs.js";
import ApplicationsDetail from "../views/Applicationsdetail.js";

var ps;

function Dashboard(props) {
  
  const navigate = useNavigate()
  const {company} = useSelector(store=>store.company)
  if(company === null){
    navigate('/')
  }
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  const state = "/company-layout/company-profile";
  const Name = company?.name;
  const Image = company?.Logo || userImage
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
        routes={croutes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleLogOut = {props.handleLogged}
      />
      <div className="main-panel" ref={mainPanel}>
        {/* <DemoNavbar {...props} /> */}
        <Routes>
        <Route path="/applicant-detail/:id" element={<ApplicationsDetail/>}/ >
        <Route path="/Job-list" element={<CompanyJobs/>}/>
        <Route path="/update-profile"  element={<UpdateCompanyProfile/>}/>
        <Route path="/company-profile" element={<CompanyProfile  data = {props.data} />}/>
        <Route path="/create-job" element={<CreateJob/>}/>
        <Route path="/application" element={<Applications/>}/>
        <Route path="/selected-student" element={<SelectedStudent/>}/>
        <Route path="/updatepassword" element={<UpdatePassword/>}/>
        
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