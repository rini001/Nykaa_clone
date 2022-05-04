import React from 'react'
import { Nav1 } from './Nav1'
import { Nav2 } from './Nav2'
import { Nav3 } from './Nav3'

export const Navbar = () => {
  return (
    <div>
      {/* <div style={{position:"fixed", width:"100%",  overflow: "hidden"}}> */}
      <Nav1/>
      <Nav2/>
      {/* </div> */}
      <Nav3/>
    </div>
  )
}
