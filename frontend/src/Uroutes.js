import User  from "views/User.js";


import TablesCom from "./views/TablesCom.js";
import TablesOp from "views/TablesOp.js";
import UpdatePassword from "views/UpdatePassword.js";
import UpdateStudent from "views/UpdateStudent.js";
import AppliedStudent from "views/AppliedStudent.js";


var routes = [
    {
        path: "/profile",
        name: "Profile",
        icon: "nc-icon nc-single-02",
        component: <User/>,
        layout: "/user-layout",
      },
 
    {
    path: "/update-student",
    name: "Update Profile",
    icon: "fa-solid fa-pen-to-square",
    component: <UpdateStudent />,
    layout: "/user-layout",
  },
  {
        path: "/table-op",
        name: "Openings",
        icon: "fa-solid fa-graduation-cap",
        component: <TablesOp/>,
        layout: "/user-layout",
      },
  
  {
    path: "/applied-student",
    name: "Applied",
    icon: "nc-icon nc-tile-56",
    component: <AppliedStudent />,
    layout: "/user-layout",
  },
  {
    path: "/updatepassword",
    name: "change password",
    icon: "fa-solid fa-key",
    component: <UpdatePassword />,
    layout: "/user-layout",
  },
//   {
//     path: "/s-student",
//     name: "Selected students",
//     icon: "fa-solid fa-graduation-cap",
//     component: <SelectedStudent/>,
//     layout: "/admin",
//   },
//   {
//     path: "/updatepassword",
//     name: "Change Password",
//     icon: "fa-solid fa-key",
//     component: <UpdatePassword />,
//     layout: "/admin",
//   },
//   // {
//   //   path: "/typography",
//   //   name: "Log Out",
//   //   icon: "nc-icon nc-caps-small",
//   //   component: <Typography />,
//   //   layout: "/admin",
//   // },
];
export default routes;