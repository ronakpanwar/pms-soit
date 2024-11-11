
import Dashboard from "./views/Dashboard.js";
// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "./views/Typography.js";
import TableList from "./views/Tables.js";
import TablesCom from "./views/TablesCom.js";
import TablesOp from "./views/TablesOp.js";
import UpdatePassword from "views/UpdatePassword.js";
import AddStudent from "views/AddStudent.js"
import SelectedStudent from "views/SelectedStudent.js";
import Home from "viewsdeep/Home.js";
import AddAdmin from "./views/AddAdmin.js";
import TableAdmin from "./views/TableAdmin.js";
// import Maps from "views/Map.js";
// import UserPage from "views/User.js";
// import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
 
    {
    path: "/admin-list",
    name: " Admins",
    icon: "nc-icon nc-single-02",
    component: <TableAdmin />,
    layout: "/admin",
  },
  {
    path: "/student-list",    
    name: "Students",
    icon: "nc-icon nc-single-02",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/company-list",
    name: "Company",
    icon: "fa-regular fa-building",
    component: <TablesCom />,
    layout: "/admin",
  },
 
  {
    path: "/opening-list",
    name: "Openings",
    icon: "nc-icon nc-tile-56",
    component: <TablesOp />,
    layout: "/admin",
  },
  {
    path: "/s-student",
    name: "Selected students",
    icon: "fa-solid fa-graduation-cap",
    component: <SelectedStudent/>,
    layout: "/admin",
  },
  {
    path: "/updatepassword",
    name: "Change Password",
    icon: "fa-solid fa-key",
    component: <UpdatePassword />,
    layout: "/admin",
  },

];
export default routes;
