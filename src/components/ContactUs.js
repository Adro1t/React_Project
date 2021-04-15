import React from 'react'
import Comments from './Comments'
import Footer from './Footer'
import Messenger from './Messenger'
import './style.css'
import Navbar from './Navbar'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3 className="m-2" style={{color:'#777777'}}>Contact Us</h3>
                <iframe className="m-4" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56527.55524622251!2d85.334711!3d27.687254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8599b10ecf391604!2sBishrom!5e0!3m2!1sen!2snp!4v1618033719385!5m2!1sen!2snp" width="37%" height="300" allowfullscreen="" loading="lazy"></iframe>

                <form className="m-3">
                    <div className="mb-3">
                        <label style={{color:'#777777'}}>Your Name (required)</label>
                        <input type="text" className="form-control" style={{ width: '100%' }} />
                    </div>
                    <div className="mb-3">
                        <label  style={{color:'#777777'}}>Your Email (required)</label>
                        <input type="email" className="form-control" style={{ width: '100%' }} />
                    </div>
                    <div className="mb-3">
                        <label  style={{color:'#777777'}}>Subject</label>
                        <input type="text" className="form-control" style={{ width: '100%' }} />
                    </div>
                    <div className="mb-3">
                        <label  style={{color:'#777777'}}>Your Message</label><br />
                        <textarea rows="2" style={{ width: '100%', border: '1px solid #ced4da' }}>
                        </textarea>
                    </div>
                    <button className="button m-2 px-4 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                        SEND</button> <br />
                </form>
            </div>
            <Comments />
            <Footer />
            <Messenger/>
        </>
    )
}

export default ContactUs
