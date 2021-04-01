import React from 'react'
import './style.css'

const Carousel = () => {
    return (
        <>
            
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/cover.jpg" className="d-block w-100" alt="..." style={{ height: '440px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="images/cover1.jpg" className="d-block w-100" alt="..." style={{ height: '440px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="images/cover2.jpg" className="d-block w-100" alt="..." style={{ height: '440px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="images/cover3.jpg" className="d-block w-100" alt="..." style={{ height: '440px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="images/cover4.jpg" className="d-block w-100" alt="..." style={{ height: '440px' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <i class="bi bi-arrow-left-circle" style={{fontSize:'50px'}}></i>
                        </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <i class="bi bi-arrow-right-circle" style={{fontSize:'50px'}}></i>
                        </button>
                </div>
            
        </>
    )
}

export default Carousel
