import Home from "~/pages/Home";
import Zingchart from "~/pages/Zingchart/idnex";
import Radio from "~/pages/Radio";
import Folowing from "~/pages/Following";

//Public Routes
const publicRoutes = [
  {
    path: "/",
    compenent: Home,
  },
  {
    path: "/zingchart",
    compenent: Zingchart,
  },
  {
    path: "/radio",
    compenent: Radio,
  },
  {
    path: "/folowing",
    compenent: Folowing,
  },
];
//Private Routes

const privateRoutes = [];

export { publicRoutes, privateRoutes };
