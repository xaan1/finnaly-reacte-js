
import React, { useState,useEffect,useReducer, createContext, useContext } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ShopContext, useShop } from './ShopContex'

const App = () => {


  const contex = useShop(ShopContext)

 console.log(contex)

  return (
    <div className="max-w-4xl mx-auto pt-16" >

      <Header />


  <Outlet />

  </div>
  )
}

export default App