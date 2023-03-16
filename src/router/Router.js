import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Tours from '../pages/Tours'
import ToursDetail from '../pages/ToursDetail'
import SearchList from '../pages/SearchList'
import ThankYou from '../pages/ThankYou'


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<ToursDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tours/search' element={<SearchList />} />
            <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
    )
}

export default Router