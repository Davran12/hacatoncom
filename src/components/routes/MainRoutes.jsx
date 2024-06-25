import React from "react"
import {Route, Routes} from "react-router-dom"
import DoctorPage from "../HomePage/DoctorPage"
import UslugPage from "../HomePage/UslugPage"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/doctor" element={<DoctorPage />} />
      <Route path="/uslug" element={<UslugPage />} />
    </Routes>
  )
}

export default MainRoutes
