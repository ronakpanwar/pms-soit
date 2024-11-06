import CompanyProfile from "views/CompanyProfile";
import CreateJob  from "views/CreateJob";
import SelectedStudent from "views/SelectedStudent";
import UpdatePassword from "views/UpdatePassword";
import Applications from "views/Applications";

var routes = [
    {
        path: "/company-profile",
        name: "Dashbord",
        icon: "nc-icon nc-bank",
        component: <CompanyProfile/>,
        layout: "/company-layout",
      },
      {
        path: "/create-job",
        name: "Create Job",
        icon: "fa-solid fa-plus",
        component: <CreateJob/>,
        layout: "/company-layout",
      },
      {
        path: "/application",
        name: "Applications",
        icon: "nc-icon nc-tile-56",
        component: <Applications />,
        layout: "/company-layout",
      },
      {
        path: "/selected-student",
        name: "Selected Student",
        icon: "fa-solid fa-graduation-cap",
        component: <SelectedStudent/>,
        layout: "/company-layout",
      },
    
      {
    path: "/updatepassword",
    name: "change password",
    icon: "fa-solid fa-key",
    component: <UpdatePassword />,
    layout: "/company-layout",
  },
];
export default routes;