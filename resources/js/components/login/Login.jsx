import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login()
{
    const navigate = useNavigate()

    const goBack = async (e) => {
        e.preventDefault()
        navigate("/")
    }

    return(
        <>
            <div className="container container-top">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input className="form-control"></input>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary">Login</button>
                                    <button className="btn btn-primary" onClick={(e) => goBack(e)}>Back</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login