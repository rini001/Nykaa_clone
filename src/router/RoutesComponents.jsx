import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cleanser } from '../components/cleanser/Cleanser'
import { CleanserDetail } from '../components/cleanser/CleanserDetail'
import { Home } from '../components/home/Home'
import { Navbar } from '../components/navbar/Navbar'

export const RoutesComponents = () => {
  return (
    <div>

       
         <Navbar/>
         <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/cleanser" element={<Cleanser />}></Route>
                <Route path="/cleanser/:userId" element={<CleanserDetail />}></Route>
          </Routes>
    </div>
  )
}
