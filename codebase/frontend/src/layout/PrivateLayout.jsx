import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar';

const PrivateLayout = () => {
  return (
    <div> 

    <div className="">
      <Header/>
    </div>

    <div className="flex gap-x-6">
      <div className="">
        <SideBar/>
      </div>
      <div className="">
        <Outlet/>
      </div>
    </div>

    <div className="">
      <Footer/>
    </div>


    </div>
  )
}

export default PrivateLayout