import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.scss'

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

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
            <div className="dashboard">
                <div className="naccs">
                    <div className="grid">
                        <div className="gc gc--1-of-3">
                            <div className="dash-logo">
                                <img className='w-100' src="logo.png" alt="" />
                            </div>
                            <div className="menu">
                                <div className="active"><span className="light" /><span>Dashboards</span></div>
                                <div><span className="light" /><span>All Blogs</span></div>
                                <div><span className="light" /><span>Add Blogs</span></div>
                                <div><span className="light" /><span>Add Banner</span></div>
                            </div>
                        </div>
                        <div className="gc gc--2-of-3">
                            <ul className="nacc">
                                <li className="active">
                                    <div className=''>

                                    </div>
                                </li>
                                <li>
                                    <div className="all-blogs">
                                        <div className="col-lg-12 col-md-12 ">
                                            {News.slice(14, 15).map((a) => (
                                                <div className="picks-right mb-4">

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
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="update-btn">
                                                                <input type="submit" value='Update' />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="delete-btn">
                                                                <input type="submit" value='Delete' />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cards">
                                        <div className="cards-header text-center">
                                            <h4>Add Blogs</h4>
                                        </div>
                                        <div className="cards-top">
                                            <div className="cards-top-left">
                                                <div className="header">
                                                    <h6></h6>
                                                </div>
                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                {/* <input className='w-100' type="text" placeholder='Enter the News Tag' /> */}
                                                                <select name="" id="">
                                                                    <option value="">Sports</option>
                                                                </select>
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
                                                    <input type="submit" value='Add' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="banner">
                                        <div className="banner-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="banner-img">
                                            <div className="header">
                                                <h6>Banner Img</h6>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                </div>
                                                <div className="update-btn">
                                                    <input type="submit" value='Update' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}

export default Dashboard