import React from 'react'
import Slider from 'react-slick'
import './style.css'

const Latest = () => {
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

            <h3 className="container pt-4   " style={{ color: '#555555' }}>CHECK OUR LATEST PRODUCTS
                <hr width="500px" />
            </h3>
            <div className="container mt-5 px-5">
                <Slider {...settings}>
                    <div>
                        <div className="image-holder">
                            <img src="images/l1.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Nomad Tortoise sunglasses for Men and Women
                                </p>
                            <p className="price">Rs 5,500.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l2.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Nomad Green sunglasses for Men and Women
                                </p>
                            <p className="price">Rs 5,500.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l3.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p className="name m-0">Bishrom Nomad Black Sunglasses for Men and Women
                                </p>
                            <p className="price">Rs 5,500.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l4.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">eyeglasses</p>
                            <p className="name m-0">Bishrom Vintage 9549 Black Eyeglasses for Men and Women
                                </p>
                            <p className="price">Rs 3,200.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l5.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">eyeglasses</p>
                            <p className="name m-0">Bishrom Vintage 9549 Green Eyeglasses for Men and Women
                                </p>
                            <p className="price">Rs 3,200.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l6.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">eyeglasses</p>
                            <p className="name m-0">Bishrom Vintage 9549 Purple Eyeglasses for Men and Women
                                </p>
                            <p className="price">Rs 3,200.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l7.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">eyeglasses</p>
                            <p className="name m-0">Bishrom Vintage 9549 Grey Eyeglasses for Men and Women
                                </p>
                            <p className="price">Rs 3,200.00</p>
                        </center>
                    </div>
                    <div>
                        <div className="image-holder">
                            <img src="images/l8.jpg" />
                            <i class="bi bi-suit-heart-fill"></i>
                            <div className="quick-view py-1">QUICKVIEW</div>
                        </div>
                        <center>
                            <p className="title mt-1">men's sunglasses</p>
                            <p class="name m-0">Bishrom Vintage 9545 Grey Sunglasses for Men and Women Both</p>
                            <p className="price">Rs 4,200.00</p>
                        </center>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Latest
