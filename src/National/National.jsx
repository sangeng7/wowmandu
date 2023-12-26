import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './national.scss'

function National() {
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
        <div id="national">
        <div className="national">
                <div className="container">
                    <div className="national-header text-center">
                        <h3 className='mb-4'><a href="">National News</a></h3>
                        <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                    </div>
                    <div className="row">
                    {News.slice(16, 17).map((a) => (
                        <div className="col-lg-7 col-md-12">
                            <div className="national-left">
                                <div className="national-left-img">
                                    <img className='w-100' src={a.img} alt="" />
                                </div>
                                <div className="national-left-text">
                                    <div className="sub-heading">
                                        <a className='' href="">shoes / <span className='currentDate'>March 15, 2019</span></a>
                                    </div>
                                    <h3 className='mt-2 mb-3'> <a href="">{a.disc}</a></h3>
                                    <p><a href="">{a.review}</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                        <div className="col-lg-5 col-md-12">
                            {News.slice(17,20).map((a) => (
                                <div className="national-right">
                                <div className="row mb-lg-4 mb-md-4">
                                    <div className="col-md-5 col-sm-5  pe-md-0 pe-sm-0">
                                        <div className="national-right-img">
                                            <img className='w-100' src={a.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-7  ps-md-0 ps-sm-0">
                                        <div className="national-right-text p-3">
                                            <div className="sub-heading">
                                                <a href="">{a.title}</a>
                                            </div>
                                            <h4><a href="">{a.disc}</a></h4>
                                            <p><a href="">{a.review}</a></p>
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

export default National