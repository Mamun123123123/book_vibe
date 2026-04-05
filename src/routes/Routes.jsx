import Mainlayout from "../layout/Mainlayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },{
        path:"/books",
        element:<Books />
      }
    ]
  } 
  
]);