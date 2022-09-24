import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { navbar } from '../utils/navbar'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            {navbar.map((item) => 
                <Route key={item.id} path={item.path} element={item.Element}/>
            )}

            <Route path='*' element={<div>Sahifa topilmadi</div>}/>
        </Routes>
    </div>
  )
}

export default Root