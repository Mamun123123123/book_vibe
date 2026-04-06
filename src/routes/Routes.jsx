import Mainlayout from "../layout/Mainlayout";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage";
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
      },
      {
        path:"/bookDetails/:bookId",
        element: <BookDetails />
      }
    ],
    errorElement: <ErrorPage />,
  } 
  
]);