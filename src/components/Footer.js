import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <>
            <div className="container mt-4">
                <p className="px-3" style={{ color: '#939395', fontSize: '17px' }}>follow us</p>
                <div className="container text-center">
                    <Link to="" className="mx-2"><img src="images/fb-logo.png" width="70px" /></Link>
                    <Link to="" className="mx-2"><img src="images/insta-logo.png" width="70px" /></Link>
                </div>
            </div>
            <hr className="mt-5" />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <img src="images/bishrom-logo.png" />
                        <p className="mt-3" style={{ color: '#939395' }}>
                            Contact No: 9841501035<br />
                            Address: Baneshwor, Kathmandu<br />
                            Email: info@bishrom.com
                    </p>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{ color: '#939395' }}>Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56527.55524622251!2d85.334711!3d27.687254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8599b10ecf391604!2sBishrom!5e0!3m2!1sen!2snp!4v1618033719385!5m2!1sen!2snp" width="90%" height="200" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{ color: '#939395' }}>Working Hours:</h4>
                        <p style={{ color: '#939395' }}>
                            Sunday 11:00-19:15<br />
                            Monday 11:00-19:15<br />
                            Tuesday 11:00-19:15<br />
                            Wednesday 11:00-19:15<br />
                            Thursday 11:00-19:15<br />
                            Friday 11:00-19:15<br />
                            Saturday Closed
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5" style={{ backgroundColor: '#333333',height:'100px'}}>
                <div className="container" width="80%">
                    <ul className="d-flex p-2 mb-0">
                        <li className="list-unstyled  px-2"><Link to="/wishlist" className="footer_link text-decoration-none" style={{ fontSize: '14px', color:'#999999' }}>WISHLIST</Link></li>
                        <li className="list-unstyled  px-2"><Link to="/" className="footer_link text-decoration-none" style={{ fontSize: '14px', color:'#999999' }}>HOME</Link></li>
                        <li className="list-unstyled  px-2"><Link to="" className="footer_link text-decoration-none" style={{ fontSize: '14px', color:'#999999' }}>BLOG</Link></li>
                        <li className="list-unstyled  px-2"><Link to="" className="footer_link text-decoration-none" style={{ fontSize: '14px', color:'#999999' }}>OUR RETURN/EXCHANGE POLICY</Link></li>
                    </ul>
                    <hr className="text-white m-1" width="40%"/>
                    <p style={{ fontSize: '14px', color:'#999999'}}>Copyright 2021 &copy; Bishrom.com/. Design by &nbsp;
                        <Link to="" className="footer_link text-decoration-none" style={{ fontSize: '16px', color:'#999999',fontWeight:'bold'}}>Ashok Dangol</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
