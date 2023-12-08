import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="footer-top-header">
                                    <h5 className='mb-4'>About Us</h5>
                                </div>
                                <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                                <div className="footer-top-logo">
                                    <img className='w-100' src="public\footerLogo.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-top-header">
                                    <h5 className='mb-4'>Contact Info</h5>
                                </div>
                                <p className='mb-3'>Address :Your address goes here, your demo address.</p>
                                <p className='mb-3'>Phone : +8880 44338899 </p>
                                <p>Email : info@colorlib.com</p>

                            </div>
                            <div className="col-md-3">
                                <div className="footer-top-header">
                                    <h5 className='mb-4'>Important Links</h5>
                                </div>
                                <ul>
                                    <li className='mb-2'><p>WHMCS-bridge</p></li>
                                    <li className='mb-2'><p>Search Domain</p></li>
                                    <li className='mb-2'><p>My Account</p></li>
                                    <li className='mb-2'><p>Shopping Cart</p></li>
                                    <li className='mb-2'><p>Our Shop</p></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-top-header">
                                    <h5 className='mb-4'>Send Message</h5>
                                </div>
                                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open</p>
                                <div className="textarea">
                                    <input type='email' placeholder='Your Email Address' />
                                    <button type='submit' className="send-icon">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-bottom-left">
                                    <p>Copyright ©2023 All rights reserved</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-bottom-right text-end">
                                    <p className='d-inline-block me-2'><FontAwesomeIcon icon={faFacebookF} /></p>
                                    <p className='d-inline-block mx-2'><FontAwesomeIcon icon={faInstagram} /></p>
                                    <p className='d-inline-block mx-2'><FontAwesomeIcon icon={faXTwitter} /></p>
                                    <p className='d-inline-block ms-2'><FontAwesomeIcon icon={faGoogle} /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer