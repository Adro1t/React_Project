import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Comments = () => {
    return (
        <>
            <div className="container">
                <h5 className="m-2">Facebook Comments</h5>

                <p className="m-2">0 Comments</p>
                <hr className="my-4" />
                <div className="d-flex align-items-center">
                    <img src="images/fb-logo.png" width="50px" />
                    <div className="textarea w-100">
                        <textarea className="d-flex align-items-center" rows="2" style={{ width: '100%', resize: 'none', borderColor: '#777777' }} placeholder="Add a comment">
                        </textarea>
                        <div className="submit">
                            <input type="checkbox" className="m-2"/> Also post on Facebook
                            <button className="py-1 px-3 m-2" style={{border:'none'}}><Link className="text-decoration-none text-white" style={{fontSize:'15px'}} to="">Post</Link></button>
                        </div>
                    </div>

                </div>
                <hr className="mt-5 mb-0" />

                <Link className="text-decoration-none p-2" to="" style={{ fontSize: '12px' }}>
                    <i className="fab fa-facebook-square p-1"></i>
                Facebook Comments Plugin
                </Link>
            </div>

        </>
    )
}

export default Comments
