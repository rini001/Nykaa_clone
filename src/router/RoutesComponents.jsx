
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Cleanser } from '../components/cleanser/Cleanser'
import { CleanserDetail } from '../components/cleanser/CleanserDetail'
import { Home } from '../components/home/Home'
import { Login } from '../components/login/Login'
import { OrderSuccessful } from '../components/login/OrderSuccessful'
import { getCartData, getData } from '../redux/action'

export const RoutesComponents = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData());
    dispatch(getCartData());
}, []);
  return (
    <div>
      <div>
         <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/cleanser" element={<Cleanser />}></Route>
                <Route path="/cleanser/:userId" element={<CleanserDetail />}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/order" element={<OrderSuccessful/>}></Route>
          </Routes>
          </div>
          
    </div>
  )
}
