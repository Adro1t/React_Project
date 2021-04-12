import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Comments = () => {
    return (
        <>
            <div className="container">
                <h5 className="m-2">Facebook Comments</h5>

                <div class="fb-comments" data-href="https://www.bishrom.com" data-width="100%" data-numposts="5"></div>
                
            </div>


        </>
    )
}

export default Comments
