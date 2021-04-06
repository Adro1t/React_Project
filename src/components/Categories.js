import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Categories = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row mt-3">
                    <div className="category" style={{ height: '440px' }}>
                        <div className="ctext"></div>
                        <p className="cproduct text-white text-center">1 PRODUCTS</p>
                        <h1 className="cheading text-white text-center">Bishrom</h1>
                        <img src="images/c1.jpg" style={{ width: '100%', height: '100%' }} />

                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c2.jpg" />
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center" style={{top:'35%'}}>39 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">eyeglasses</h1>
                    </div>
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c3.jpg"/>
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center">31 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">Men's <br/> eyeglasses</h1>
                    </div>
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c4.jpg" style={{top:'-50%'}}/>
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center">23 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">Men's <br/> sunglasses</h1>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c5.jpg" style={{top:'-10%'}}/>
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center" style={{top:'35%'}}>37 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">sunglasses</h1>
                    </div>
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c6.jpg" style={{top:'-50%'}}/>
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center">38 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">women's <br/> eyeglasses</h1>
                    </div>
                    <div className="col-md-4 sub_category" style={{ height: '125px' }}>
                        <img src="images/c7.jpg" style={{top:'-50%'}}/>
                        <div className="sub_ctext"></div>
                        <p className="sub_cproduct text-white text-center">37 PRODUCTS</p>
                        <h1 className="sub_cheading text-white text-center">women's <br/> sunglasses</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
