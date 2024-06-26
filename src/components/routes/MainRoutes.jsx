import React from "react"
import {Route, Routes} from "react-router-dom"
import DoctorPage from "../HomePage/DoctorPage"
import UslugPage from "../HomePage/UslugPage"
import AddProduct from "../products/AddProduct"
import NavBar from "../HomePage/NavBar"
import EditProduct from "../products/EditProduct"
export const ADMIN_ROUTES = [
  // {id: 1, link: "/admin", element: <AdminPage />}
  {id: 2, link: "/edit/:id", element: <EditProduct />},
  {id: 3, link: "/add", element: <AddProduct />},
]

const PUBLIC_POUTES = [
  {id: 1, link: "/home", element: <NavBar />},
  {id: 2, link: "/doctor", element: <DoctorPage />},
  {id: 3, link: "/uslug", element: <UslugPage />},
]

const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
      {PUBLIC_POUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  )
}

export default MainRoutes
