import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './internationalChild.scss'

function InternationalChild() {
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
            <div className="interChild">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="interChild-left">
                                <div className="interChild-left-header">
                                    <h4 className='my-4'><a href="">Second divided from form fish beast made every of seas all gathered us saying he our</a></h4>
                                    <h6><a href=""> 03 Comments</a></h6>
                                    <div className="quote">
                                        <div className="quote-inner">
                                            <p><em>"MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                                                camp when you can get the MCSE study materials "</em></p>
                                            <h6>-Sandesh Rai</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="interChild-left-img">
                                    <img className='w-100' src="https://hamrokhabar.com/images/main/1701233401.jpg" alt="" />
                                </div>
                                <div className="interChild-left-text">
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                        on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower </p>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                        on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower </p>

                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                                        camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower </p>

                                </div>
                                <div className="comment">
                                    <h5>06 Comments</h5>
                                    <form action="">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" placeholder='Enter Your FullName*' />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder='Enter Your Email Address*' />
                                            </div>
                                        </div>
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Add a comment...'></textarea>
                                    </form>
                                    <div className="comment-section">
                                        <h6>Satish Gurung <span> 4 weeks ago</span></h6> 
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                        <h6>Satish Gurung <span>4 weeks ago</span></h6> 
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                        <h6>Satish Gurung <span>4 weeks ago</span></h6> 
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="interChild-right">
                                <div className="category">
                                    <div className="category-header">
                                        <h5>Category</h5>
                                    </div>
                                    <div className="category-items">
                                        <ul>
                                            <li><a href="">Sports</a></li>
                                            <li><a href="">Travels</a></li>
                                            <li><a href="">International</a></li>
                                            <li className='border-0'><a href="">Politics</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recent">
                                    <div className="recent-header">
                                        <h5>Recent Posts</h5>
                                    </div>

                                    {News.slice(25, 29).map((a) => (
                                        <div className="row align-items-center mb-4">
                                            <div className="col-md-4">
                                                <div className="recent-img">
                                                    <img className='w-100' src={a.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="recent-text">
                                                    <h6><a href="">{a.title}</a></h6>
                                                    <p>{a.review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="banner">
                                    <img className='w-100' src="https://hamrokhabar.com/front/images/advertise/FILE002.GIF" alt="" />
                                </div>
                                <div className="feeds">
                                    <div className="feeds-header">
                                        <h5>Facebook Feeds</h5>
                                    </div>
                                    <div className="feeds-items">
                                        <div className="row g-3">
                                            {News.slice(29, 35).map((a) => (
                                                <div className="col-md-4">
                                                    <img className='w-100' src={a.img} alt="" />
                                                </div>
                                            ))}
                                        </div>
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

export default InternationalChild