import React from 'react'
import Carousel from './Carousel'
import Categories from './Categories'
import Latest from './Latest'
import Navbar from './Navbar'
import Sale from './Sale'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Carousel />
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                <Latest />
                <Sale/>
                </div>
                <Categories/>
            </div>

        </>
    )
}

export default Home
