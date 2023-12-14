import React from 'react'
import './forget.scss'

function Forget() {
    return (
        <>
            <div className="forget">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="forget-login">
                                <div className="forget-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>ENTER YOUR EMAIL</h6>
                                </div>
                                <div className="forget-login-form text-center">
                                    <input className='w-100' type="email" placeholder='Enter your email address' />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget