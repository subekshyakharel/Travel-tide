import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../Head/Login'
import Favorites from '../Head/Favorites'
import Home from '../Pages/Home'
import Something from './Something'


const Header = () => {
  return (
    <>
      <div className="head">
        <div className="container">
        <div className='flex'>
            <div className="logo">
               <Link to={`/`}> <img width={100} src="https://media.designrush.com/inspiration_images/134792/conversions/_1511457672_380_travelers-desktop.jpg" alt="" /> </Link>
            </div>
            <div className="login">
                <ul className=''>
                    <li><Link to={`/favorites`} ><i class="bi bi-heart-fill"></i> <span> Favorites</span></Link></li>
                    <li><Link to={`/login`} ><i class="bi bi-person-fill"></i><span> Login</span></Link></li>
                </ul>

                <Link to={`/join`} ><button className='btn-j'>Join Now</button></Link>
            </div>
        </div>
        </div>
      </div>
     

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/favorites' element = {<Favorites/>} />
        <Route path='/something' element= {<Something/>}/>
      </Routes>
    </>
  )
}

export default Header
