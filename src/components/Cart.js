import React from 'react'
import Footer from './Footer'
import Messenger from './Messenger'
import Navbar from './Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3 className="m-2 mt-4" style={{ color: '#555555' }}>CART</h3>
                <center>
                    <p style={{color:'#777777'}} className="m-3">Your cart is currently empty</p>
                    <button className="button my-3 px-4 py-2" style={{ border: 'none', backgroundColor: '#627f9a', color: 'white', fontSize: '18px' }}>
                        RETURN TO SHOP</button>
                </center>
            </div>
            <Footer />
            <Messenger />
        </>
    )
}

export default Cart
