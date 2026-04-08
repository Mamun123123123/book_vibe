import Mainlayout from "../layout/Mainlayout";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../pages/books/ReadBooks";
import Wishlist from "../pages/books/Wishlist";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/homepage/Homepage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },{
        path:"books",
        element:<ReadBooks />
      },
      {
        path:"bookDetails/:bookId",
        element: <BookDetails />
      },
      {
        path:"/wishlist",
        element:<Wishlist />
      }
    ],
    errorElement: <ErrorPage />,
  } 
  
]);