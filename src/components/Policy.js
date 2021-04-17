import React from 'react'
import Comments from './Comments'
import Footer from './Footer'
import Messenger from './Messenger'
import Navbar from './Navbar'

const Policy = () => {
    return (
        <>
            <Navbar />
            <div className="container mb-4">
                <h3 className="m-2 mt-4" style={{ color: '#555555' }}>OUR RETURN/EXCHANGE POLICY</h3>
                <h4 className="m-2 mt-5" style={{ color: '#555555' }}>Did you love your order? If not, see below for all the return details.</h4>

                <ul className="mt-3">
                    <li style={{color:'#777777'}}>For Eyewear returned *within* one week of the purchase date, a refund will be issued to the original form of payment at the original selling price. If returned *after* one week, a credit will be issued at the original selling price.</li>
                    <li style={{color:'#777777'}}>We’ll gladly accept unworn, scratchfree Eyewear. All items must be returned in original packaging.</li>
                    <li style={{color:'#777777'}}>Bishrom Eyewear purchased at independent stores must be returned to the location where it was purchased.</li>
                    <li style={{color:'#777777'}}>Without an original sales receipt, the item will not be accepted.</li>
                    <li style={{color:'#777777'}}>Final Sale Policy: all sale items purchased at an extra 50% off are final sale and cannot be returned or exchanged.</li>

                </ul>

            </div>
            <Comments />
            <Footer />
            <Messenger />
        </>
    )
}

export default Policy
