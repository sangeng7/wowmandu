import React from 'react'
import './change.scss'

function Change() {
    return (
        <>
            <div className="change">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="change-login">
                                <div className="change-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>Change Password</h6>
                                </div>
                                <div className="change-login-form text-center">
                                    <input className='w-100' type="email"  placeholder='Enter your Email address'/>
                                    <input className='w-100' type="text" placeholder='Enter Old Password' />
                                    <input className='w-100' type="password" placeholder='Enter New Password' />
                                    <input className='w-100' type="password" placeholder='Confirm New Password' />

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

export default Change