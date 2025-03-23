import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./level3/Main";
import NewMain from "./new/NewMain";
import My from "./my/My";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element:<NewMain />
      },
      {
        path:"my",
        element:<My />
      },
      {
        path:"old",
        element:<Main />
      }
    ]
  }
])

export default router;