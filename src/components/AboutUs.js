import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Comments from './Comments'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="m-3" style={{ color: '#777777' }}>About Us</h1>
                <p className="m-3" style={{ color: '#777777' }}>Bishrom is a Nepali eyewear brand designed to express one’s personal style and distinct personality. We invite you to be the part of our story and see the world through our premium lenses.</p>
                <img className="my-3 mx-3" style={{ color: '#777777' }} src="images/a1.jpg" width="400px" height="600px" />
                <img className="my-3" style={{ color: '#777777' }} src="images/a2.jpg" width="400px" height="600px" />
                <p className="m-3" style={{ color: '#777777' }}>Bishrom is a Kathmandu based eyewear brand. All Bishrom products are designed in Nepal and made in China. Bishrom has a huge range of eyewear from metal frames to high quality handmade acetate sunglasses.</p>
                <h6 className="m-3" style={{ color: '#777777' }}>Recycle Your Eyewear</h6>
                <p className="m-3" style={{ color: '#777777' }}>Do you have unwanted or broken pair of Bishrom Eyewear?</p>
                <p className="m-3" style={{ color: '#777777' }}>Don’t worry!! You can now recycle your old glasses with us.</p>
                <p className="m-3" style={{ color: '#777777' }}>Bring in your unwanted or broken pair of Bishrom Eyewear and get 20% discount on a new pair.</p>
                <Comments />

            </div>
            <Footer />
        </>
    )
}

export default AboutUs
