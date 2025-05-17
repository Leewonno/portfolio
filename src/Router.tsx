import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainVer1 from "./level3/Main";
import Main from "./ver3/Main";
import My from "./my/My";
import MainVer2 from "./ver2/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element:<Main />
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