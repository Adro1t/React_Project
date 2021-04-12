import React from 'react'
import Comments from './Comments'
import Footer from './Footer'
import Navbar from './Navbar'

const Wishlist = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3 className="m-2 mt-4" style={{color:'#555555'}}>WISHLIST</h3>
                <h4 className="m-2 mt-5" style={{color:'#555555'}}>My wishlist on</h4>
                <button className="m-2 px-3 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                    <i class="bi bi-pen"></i> EDIT TITLE</button> <br />
                <input type="text" className="m-2" placeholder="My wishlist on" style={{ width: '100%' }} /><br />
                <button className="m-2 px-3 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                    <i class="fas fa-check"></i> SAVE</button>
                <button className="my-2 px-3 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                    <i class="fas fa-times"></i> CANCEL</button>

                <div className="container m-2 mt-3">
                    <div className="row m-2">
                        <div className="col-md-4" style={{fontSize:'18px',fontWeight:'bold',color:'#555555'}}>Product Name</div>
                        <div className="col-md-4" style={{fontSize:'18px',fontWeight:'bold',color:'#555555'}}>Unit Price</div>
                        <div className="col-md-4" style={{fontSize:'18px',fontWeight:'bold',color:'#555555'}}>Stock status</div>
                    </div>
                    <hr />
                <p style={{color:'#777777'}} className="mb-5">No products were added to the wishlist</p>
            </div>
            </div>


            <Comments />
            <Footer />
        </>
    )
}

export default Wishlist
