import React, { useState } from 'react'; import './dashboard.scss'

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
                                <div><span className="light" /><span>Cards Section</span></div>
                                <div><span className="light" /><span>Trending Section</span></div>
                                <div><span className="light" /><span>Picks Section</span></div>
                                <div><span className="light" /><span>Travel Section</span></div>
                                <div><span className="light" /><span>Sports Section</span></div>
                                <div><span className="light" /><span>International Section</span></div>
                                <div><span className="light" /><span>Banner Section</span></div>


                            </div>
                        </div>
                        <div className="gc gc--2-of-3">
                            <ul className="nacc">
                                <li className="active">
                                    <div className=''>

                                    </div>
                                </li>
                                <li>
                                    <div className="cards">
                                        <div className="cards-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="cards-top">
                                            <div className="cards-top-left">
                                                <div className="header">
                                                    <h6>Cards Top Left</h6>
                                                </div>
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
                                            <div className="cards-top-mid">
                                                <div className="header">
                                                    <h6>Cards Top Mid</h6>
                                                </div>
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
                                            <div className="cards-top-right-top">
                                                <div className="header">
                                                    <h6>Cards Top Right-Top</h6>
                                                </div>
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
                                            <div className="cards-top-right-bottom">
                                                <div className="header">
                                                    <h6>Cards Top Right-Bottom</h6>
                                                </div>
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
                                        <div className="cards-bottom">
                                            <div className="cards-bottom-left">
                                                <div className="header">
                                                    <h6>Cards Bottom Left</h6>
                                                </div>
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
                                            <div className="cards-bottom-mid">
                                                <div className="header">
                                                    <h6>Cards Bottom Mid</h6>
                                                </div>
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
                                            <div className="cards-bottom-right">
                                                <div className="header">
                                                    <h6>Cards Bottom Right</h6>
                                                </div>
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
                                </li>
                                <li>
                                    <div className="trending">
                                        <div className="trending-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="trending-card">
                                            <div className="header">
                                                <h6>Trending Card</h6>
                                            </div>
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
                                </li>
                                <li>
                                    <div className="picks">
                                        <div className="picks-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="picks-left">
                                            <div className="header">
                                                <h6>Picks Card</h6>
                                            </div>
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
                                        <div className="picks-right">
                                            <div className="header">
                                                <h6>Picks Card</h6>
                                            </div>
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
                                </li>
                                <li>
                                    <div className="travel">
                                        <div className="travel-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="travel-left">
                                            <div className="header">
                                                <h6>Travel Card</h6>
                                            </div>
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
                                        <div className="travel-right">
                                            <div className="header">
                                                <h6>Travel Card</h6>
                                            </div>
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
                                </li>
                                <li>
                                    <div className="sports">
                                        <div className="sports-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="sports-left">
                                            <div className="header">
                                                <h6>Sports Left-Card</h6>
                                            </div>
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
                                        <div className="sports-right">
                                            <div className="header">
                                                <h6>Sports Right-Card</h6>
                                            </div>
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
                                </li>
                                <li>
                                    <div className="international">
                                        <div className="international-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="international-left">
                                            <div className="header">
                                                <h6>International Left-Card</h6>
                                            </div>
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
                                        <div className="international-right">
                                            <div className="header">
                                                <h6>International Right-Card</h6>
                                            </div>
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