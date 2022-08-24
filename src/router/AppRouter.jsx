import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { Navbar } from '../ui/components/NavBar'

export const AppRouter = () => {
  return (
    <>        
    <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />

        <Route path='login' element={<LoginPage />}/>

        <Route path='/' element={<Navigate to='/marvel' />}/>
      </Routes>
    </>
  )
}
