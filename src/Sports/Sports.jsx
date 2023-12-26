import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './sports.scss'

function Sports() {
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
        <div id="sports">
        <div className="sports">
                <div className="container">
                    <div className="sports-header text-center">
                        <h3 className='mb-4'><a href="">Sports News</a></h3>
                        <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                    </div>
                    
                    <div className="row g-4">
                        {News.slice(20, 21).map((a) => (
                            <div className="col-md-12 col-lg-6">
                                <div className="sports-left">
                                    <div className="sports-left-img">
                                        <img className='w-100' src={a.img} alt="" />
                                    </div>
                                    <div className="sports-left-text">
                                        <div className="sub-heading">
                                            <a href="">Sports / <span className='currentDate'>Dec 8,2023</span></a>
                                        </div>
                                        <h4><a href="">{a.disc}</a></h4>
                                        <p><a href="">{a.review}</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-md-12 col-lg-6">
                            <div className="sports-right">
                                <div className="row g-4">
                                    {News.slice(21, 25).map((a) => (
                                        <div className="col-md-6">
                                            <div className="sports-right-img">
                                                <img className='w-100' src={a.img} alt="" />
                                            </div>
                                            <div className="sports-right-text">
                                                <div className="sub-heading">
                                                    <a href="">Sports / <span className='currentDate'>Dec 8,2023</span></a>
                                                </div>
                                                <h4><a href="">{a.disc}</a></h4>
                                                <p><span className='currentDate'></span><span className='text-dark'> .By Alen Mark</span></p>
                                            </div>
                                        </div>
                                    ))}
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

export default Sports