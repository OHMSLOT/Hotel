import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AppLayout } from "./components/layout";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
        children:[{path:'',element: <HomePage/>},{path:'/roomtype',element:<>roomtype</>}]
    },])