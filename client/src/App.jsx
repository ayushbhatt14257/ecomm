import React from 'react'
import Nav from './Components/nav/Nav';
import Services from './Components/services/Services'
import Login from './Components/login/Login'
import Register from './Components/register/Register'
import Logout from './Components/logout/Logout'
import User from './Components/userProfile/User';
import Footer from './Components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { createContext,  useReducer } from 'react';

import {initialState, reducer} from '../src/reducer/UseReducer'

export const UserContext = createContext();

const Routing = () => {
  return(
    <>
    <Routes>
        <Route path='/' element={<Services />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<User />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}

const App = () => {
  const [mystate, dispatch] = useReducer(reducer, initialState)
  return (

    <>
      <UserContext.Provider value = {{mystate, dispatch}}>
      <Nav />
      <Routing/>
      <Footer/>
      </UserContext.Provider>
    </>
  )
}

export default App;