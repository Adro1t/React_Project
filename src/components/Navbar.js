import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: '#2964a0' }}>
                <div className="container">
                    <ul className="d-flex justify-content-end p-2 mb-0">
                        <li className="header list-unstyled  px-2 border-end"><Link to="/" className="text-decoration-none text-white" style={{ fontSize: '14px' }}>Home</Link></li>
                        <li className="header list-unstyled  px-2 border-end"><Link to="/about-us" className="text-decoration-none text-white" style={{ fontSize: '14px' }}>About Us</Link></li>
                        <li className="header list-unstyled  px-2 border-end"><Link to="/wishlist" className="text-decoration-none text-white" style={{ fontSize: '14px' }}>Wishlist</Link></li>
                        <li className="header list-unstyled  px-2"><Link to="/contact-us" className="text-decoration-none text-white" style={{ fontSize: '14px' }}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="total-nav">
                <div className="container-fluid" style={{backgroundColor: '#2d3436',backgroundImage:'linear-gradient(315deg, #2d3436 30%, #000000 74%)'}}>
                    <div className="container">
                        <div className="row d-flex align-items-center" style={{ height: '120px' }}>
                            <div className="col-md-2 ">
                                <Link className="navbar-brand" to="/">BISHROM <br />
                            EYEWEAR</Link>
                            </div>
                            <div className="col-md-6">
                                <form className="d-flex align-items-center px-5" style={{ height: '32px' }}>
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn" type="submit"><i className="bi bi-search text-white"></i></button>

                                    <Link to=""><i className="icon bi bi-facebook"></i></Link>
                                    <Link to=""><i className="icon bi bi-instagram"></i></Link>
                                </form>
                            </div>
                            <div className="col-md-4 d-flex align-items-center" style={{ fontWeight: 'bold' }}>
                                <Link to="" className="Number text-decoration-none p-2"><i className="bi bi-telephone p-2"></i>9841501035</Link>
                                <Link to="/login" className="login text-decoration-none p-2" style={{ color: 'black', fontSize: '14px' }}>LOGIN</Link>
                                <Link to="/cart" className="login cart text-decoration-none p-2 d-flex align-items-center" style={{ color: 'black', fontSize: '14px' }}>CART/Rs 0.00 &nbsp;
                            <i className="bi bi-bag" style={{ color: '#627f9a', fontSize: '40px' }}></i></Link>

                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
                    <div className="container">
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        sunglasses
                                </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#">Men's Sunglasses</Link></li>
                                        <li><Link className="dropdown-item" to="#">Women's Sunglasses</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        eyeglasses
                                </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#">Men's Eyeglasses</Link></li>
                                        <li><Link className="dropdown-item" to="#">Women's Eyeglasses</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/photos">photos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">about us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
