import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from "./routes/Routes"
import { RouterProvider } from 'react-router'

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
)