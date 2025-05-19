import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainVer1 from "./level3/Main";
import Main from "./ver3/Main";
import My from "./my/My";
import MainVer2 from "./ver2/Main";
import Home from "./ver3/Home";
import Project from "./ver3/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element:<Main />,
        children:[
          {
            path:"",
            element:<Home />
          },
          {
            path:"project",
            element:<Project />
          }
        ],
      },
      {
        path: "ver2",
        element:<MainVer2 />
      },
      {
        path:"ver1",
        element:<MainVer1 />
      },
      {
        path:"my",
        element:<My />
      },
    ]
  }
])

export default router;