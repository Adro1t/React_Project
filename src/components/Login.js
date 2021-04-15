import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Messenger from './Messenger'
import './style.css'
import Navbar from './Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container  mt-5 mb-3">
                <div className="col-md-8 offset-md-2 shadow-lg p-5">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <h3 style={{ color: '#777777' }}>Login</h3>
                            <label className="my-1" style={{ color: '#777777' }}>Username or email address</label>
                            <input className="my-1" type="text" style={{ width: '100%' }} />
                            <label className="my-1" style={{ color: '#777777' }}>Password</label>
                            <input className="my-1" type="password" style={{ width: '100%' }} />
                            <button className="button m-2 px-4 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                                LOGIN</button> <br />

                        </div>
                        <div class="col-md-6">
                            <h3 style={{ color: '#777777' }}>Register</h3>
                            <label className="my-1" style={{ color: '#777777' }}>Email address</label>
                            <input className="my-1" type="text" style={{ width: '100%' }} />
                            <label className="my-1" style={{ color: '#777777' }}>Password</label>
                            <input className="my-1" type="password" style={{ width: '100%' }} />
                            <button className="button m-2 px-4 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                                REGISTER</button> <br />

                        </div>

                    </form>
                    <div class="m-3">
                        <input type="checkbox"/>
                        <label className="m-1">Remember me</label>
                    </div>

                    <Link className="m-3 text-decoration-none" to="">Lost Your Password?</Link>
                </div>
            </div>
                <Footer />
                <Messenger />
        </>
    )
}

export default Login
