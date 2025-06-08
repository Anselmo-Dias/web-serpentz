import { router } from "./routes"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}
