import React from 'react'
import Slider from 'react-slick'
import './style.css'

const Sale = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-8px",
        slidesToShow: 4,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container mt-3" style={{ backgroundColor: '#ec2349', width: '95%', cursor: 'context-menu' }} >
                <p className="text-white py-4 text-end" style={{ fontSize: '70px', paddingRight: '170px' }}>SALE</p>
            </div>

            <h3 className="container pt-4" style={{ color: '#555555' }}>CHECK OUR PRODUCTS ON SALE
                <hr width="500px" />
            </h3>
            <div className="container mt-5 px-5">
                <Slider {...settings}>
                    <div>
                        <div className="image-holder">
                            <img src="images/s1.jpg" />
                            <div className="sale">SALE!</div>
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">sunglasses</p>
                            <p className="name m-0">Bishrom vintage 1243 bronze sunglasses for women
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s2.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">sunglasses</p>
                            <p className="name m-0">Bishrom vintage 1243 silver sunglasses for women
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s3.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">sunglasses</p>
                            <p className="name m-0">Bishrom vintage 1243 bronze sunglasses for women
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s4.jpg" />
                            <div className="sale">SALE!</div>
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">sunglasses</p>
                            <p className="name m-0">Bishrom vintage 1243 bronze sunglasses for women
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s5.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Vintage 1245 silver sunglasses for men and women both
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s6.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Vintage 1245 bronze sunglasses for men and women both
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s7.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Vintage 1245 bronze sunglasses for men and women both
                                </p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                    <div>

                        <div className="image-holder">
                            <img src="images/s8.jpg" />
                            <div className="sale">SALE!</div>                            
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p class="name m-0">Bishrom Vintage 1245 bronze sunglasses for men and women both</p>
                            <div className="d-flex flex-wrap">
                                <p className="prev-price">Rs 3,800.00</p>
                                <p className="price">Rs 3,500.00</p>
                            </div>
                        </center>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Sale