import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Basket from './Pages/Basket'
import AddForm from './Pages/Add'
import Details from './Pages/Details'
import UserRoot from './Pages/UserRoot'
function App() {


  return (
    <>
       <Routes>
        <Route path='/' element={<UserRoot/>} >
          <Route index element={<Home/>}/>  
          <Route path='/:id' element={<Details/>}/>
          <Route path='/Basket' element={<Basket/>}/>
          <Route path='/add' element={<AddForm/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
