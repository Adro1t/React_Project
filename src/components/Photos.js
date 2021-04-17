import React from 'react'
import Footer from './Footer'
import Messenger from './Messenger'
import Navbar from './Navbar'

const Photos = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3 className="m-2 mt-4" style={{ color: '#555555' }}>PHOTOS</h3>
                <div className="container">
                    <div className="row g-2 m-2">
                        <div className="col-md-4">
                            <img src="images/p1.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p2.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p3.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                    </div>
                    <div className="row g-2 m-2">
                        <div className="col-md-4">
                            <img src="images/p4.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p5.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p6.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                    </div>
                    <div className="row g-2 m-2">
                        <div className="col-md-4">
                            <img src="images/p7.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p8.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        <div className="col-md-4">
                            <img src="images/p9.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                    </div>
                    <div className="row g-2 m-2">
                        <div className="col-md-4">
                            <img src="images/p10.jpg" width="100%" style={{cursor:'zoom-in'}}></img>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
            <Messenger />
        </>
    )
}

export default Photos
