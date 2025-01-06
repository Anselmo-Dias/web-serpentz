import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-router";
import { HomePage } from "@/pages/app/home";
import { AppLayout } from "@/pages/_layouts/app-layout";

export const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <PrivateRoute protectedComponent={HomePage} />,
      }
    ]
  }
])