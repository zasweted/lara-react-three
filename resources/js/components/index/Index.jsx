import React from 'react'
import { useNavigate } from 'react-router-dom'

function Index() {

    const navigate = useNavigate()
    const goRegister = async (e) => {
        e.preventDefault()
        navigate("/register")
    }
    const goLogin = async (e) => {
        e.preventDefault()
        navigate("/login")
    }
    return (
        <>
            <div>
                <div className="container container-top">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="card d-flex justify-content-center">
                                <h5 className="card-header">Welcome</h5>
                                <div className="card-body">
                                    <div className="d-flex justify-content-around" role="group" >
                                        <button type="button" className="btn btn-primary" onClick={(e)=>goLogin(e)}>Login</button>
                                        <button type="button" className="btn btn-primary" onClick={(e)=>goRegister(e)}>Register</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;