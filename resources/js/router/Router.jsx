import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from '../components/index/Index'
import NotFound from '../components/index/NotFound'
import Register from '../components/login/Register'
import Login from '../components/login/Login'

function Router()
{
    return(
        <>
            <div>
                <Routes>
                    <Route path="/" element={ <Index />} />
                    <Route path="/*" element={ <NotFound />} />
                    <Route path="/register" element={ <Register />} />
                    <Route path="/login" element={ <Login />} />

                </Routes>
            </div>
        </>
    )

}

export default Router;