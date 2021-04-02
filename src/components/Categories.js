import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row m-1">
                    <div className="col-md-12" style={{backgroundImage:'url(images/c1.jpg)',height:'400px'}}>
                        <Link to="" className="text-decoration-none text-white text-center">
                            </Link>
                    </div>
            </div>
                <div className="row m-1" height="125px">
                    <div className="col-md-4" style={{backgroundImage:'url(images/c2.jpg)',height:'125px'}}>

                    </div>
                    <div className="col-md-4" style={{backgroundImage:'url(images/c1.jpg)',height:'100%'}}></div>
                    <div className="col-md-4" style={{backgroundImage:'url(images/c1.jpg)',height:'100%'}}></div>
                </div>
                <div className="row m-1" height="125px">
                    <div className="col-md-4" style={{backgroundImage:'url(images/c1.jpg)',height:'100%'}}></div>
                    <div className="col-md-4" style={{backgroundImage:'url(images/c1.jpg)',height:'100%'}}></div>
                    <div className="col-md-4" style={{backgroundImage:'url(images/c1.jpg)',height:'100%'}}></div>

                </div>

            </div>
        </>
    )
}

export default Categories
