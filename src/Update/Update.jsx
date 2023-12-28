import React from 'react'
import './update.scss'

function Update() {
    return (
        <>
            <div className="update my-5">
                <div className="container">
                    <div className="update-form">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                    </div>
                                    <div className="col-md-12">
                                        <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                    </div>
                                    <div className="col-md-12">
                                        <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-0">
                                <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                            </div>
                        </div>
                        <div className="update-btn">
                            <input type="submit" value='Update' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Update