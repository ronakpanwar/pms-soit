
import React from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useNavigate } from 'react-router-dom';
import logo from "logo.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setAdmins, setAllSelected, setAppliedJobs, setCompanys, setJobs, setSelectedJob, setStudents, setUser } from "../../redux/userSlice";
import { userApi, companyApi } from "../../utils/utils";
import { setApplicants, setCompany, setCompanyJobs } from "../../redux/companySlice";
import clgLogo from 'logoRgpv.png';

var ps;

function Sidebar(props) {

  const navigate = useNavigate();

  // function handleLogout() {
  //   // Perform any logout logic here
  //   // For example, clear user session, etc.

  //   // Navigate to the home page
  //   navigate('/');
  // }
  const { user } = useSelector(store => store.user)
  const { company } = useSelector(store => store.company)
  const dispatch = useDispatch()

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

  const handleLogout = async () => {
    if (user !== null) {
      try {
        const res = await axios.post(`${userApi}/logout`, {}, {
          withCredentials: true
        })
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(null))
          dispatch(setAdmins([]))
          dispatch(setCompanys([]))
          dispatch(setStudents([]))
          dispatch(setJobs([]))
          dispatch(setAppliedJobs([]))
          dispatch(setSelectedJob(null))
          dispatch(setAllSelected([]))
        }
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      }
    } else if (company !== null) {
      try {
        const res = await axios.post(`${companyApi}/logout`, {}, {
          withCredentials: true
        })
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setCompany(null))
          dispatch(setCompanyJobs([]))
          dispatch(setApplicants([]))
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
        console.log(error)
      }
    }
  }

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo ">
        <a
          href="#"
          className="simple-text logo-mini"
        >
          <div className="">
            <img  style={{ width: '45px', height: '35px', border: '1px solid ', borderRadius: '50%' ,objectFit: 'cover'}} src={clgLogo} alt="react-logo" />
          </div>
        </a>
        <a
          href={props.state}
          className="simple-text  logo-normal"
        >
          Soit Rgpv
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
            <NavLink to="/" className="nav-NavLink" onClick={handleLogout}>
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
