import React from 'react'
import './admin.scss'

function Admin() {
    return (
        <>
            <div className="admin">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="admin-login">
                                <div className="admin-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>PLEASE LOGIN TO ADMIN DASHBOARD</h6>
                                </div>
                                <div className="admin-login-form text-center">
                                    <input className='w-100' type="text" placeholder='Enter your email address' />
                                    <input className='w-100' type="password" placeholder='Enter your Password' />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Login" />
                                </div>
                                <div className="forget-password">
                                    <h6 className=' text-center'><a href="">Forget Your Password?</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin