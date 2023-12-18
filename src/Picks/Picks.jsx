import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './picks.scss'

function Picks() {
    const [News, setNews] = useState([])
    useEffect(() => {
        axios.get('Data/news.json')
            .then(res => {
                console.log(res.data);
                setNews(res.data)
            });
    }, [])
    return (
        <>
        <div id="blog">
        <div className="picks">
                <div className="container">
                    <div className="picks-header text-center">
                        <h3 className='mb-4'><a href="">Editor Picks</a></h3>
                        <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                    </div>
                    <div className="row g-4">
                        {News.slice(13, 14).map((a) => (
                            <div className="col-lg-6 col-md-12">
                                <div className="picks-left">
                                    <div className="picks-left-img">
                                        <img className='w-100' src={a.img} alt="" />
                                    </div>
                                    <div className="picks-left-text">
                                        <div className="sub-heading">
                                            <a className='' href="">{a.title}</a>
                                        </div>
                                        <h3 className='mt-md-2 mb-md-3'><a href="">{a.disc}</a></h3>
                                        <p><span className='currentDate'>March 12 , 2019</span><span className='text-dark'> .By Alen Mark</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-6 col-md-12 ">
                            {News.slice(14, 16).map((a) => (
                                <div className="picks-right">

                                    <div className="row g-4 align-items-center mb-md-4 mb-sm-5">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="picks-right-img">
                                                <img className='w-100' src={a.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="picks-right-text">
                                                <a href="">{a.title}</a>
                                                <h4 className='mb-3 mt-2'>{a.disc}</h4>
                                                <p>{a.review}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Picks