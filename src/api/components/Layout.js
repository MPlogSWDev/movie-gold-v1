import { Outlet, Routes } from "react-router-dom";

// import ( Outlet)

import React from 'react'

const Layout = () => {
  return (
    <main> 
        <Routes>
          <Route path="/" element={Layout}>
              

          </Route>
        </Routes>
    </main>
  )
}

export default Layout