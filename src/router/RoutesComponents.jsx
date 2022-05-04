import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cleanser } from '../components/cleanser/Cleanser'
import { Home } from '../components/home/Home'
import { Navbar } from '../components/navbar/Navbar'

export const RoutesComponents = () => {
  return (
    <div>
         <Navbar/>
         <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/cleanser" element={<Cleanser />}></Route> 
          </Routes>
    </div>
  )
}
