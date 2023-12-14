import React from 'react'
import './reset.scss'

function Reset() {
    return (
        <>
            <div className="reset">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="reset-login">
                                <div className="reset-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>PLEASE LOGIN TO ADMIN DASHBOARD</h6>
                                </div>
                                <div className="reset-login-form text-center">
                                    <input className='w-100' type="password" placeholder='New Password' />
                                    <input className='w-100' type="password" placeholder='Confirm Password' />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reset