import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './paginas/Login.js'
import Home from './paginas/Home.js'
import Cadastro from './paginas/Cadastro.js'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/face' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  )
}