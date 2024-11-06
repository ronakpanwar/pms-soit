
import React from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useNavigate } from 'react-router-dom';
import logo from "logo.svg";

var ps;

function Sidebar(props) {
const navigate = useNavigate();
 
// function handleLogout() {
//   // Perform any logout logic here
//   // For example, clear user session, etc.
  
//   // Navigate to the home page
//   navigate('/');
// }
  
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName) ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, [location]); // Add location as a dependency

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="#"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href={props.state}
          className="simple-text logo-normal"
        >
          {props.Name}
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
          
            return (
            <li
              className={`${activeRoute(prop.path)} ${prop.pro ? "active-pro" : ""}`}
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
              
            );
          })}
          <li>
          <NavLink to="/" className="nav-NavLink" onClick={()=>{
            // <Navigate to='/' /> 
            navigate("/");
          }}>
              <i className="fa fa-sign-out" />
              <p>Logout</p>
          </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
