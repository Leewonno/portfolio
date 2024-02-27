import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./level3/Main";
import NewMain from "./new/NewMain";

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
        path:"new",
        element:<NewMain />
      }
    ]
  }
])

export default router;