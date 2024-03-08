import React from 'react'

import Features from '../Features/Features'
import Testimonials from '../Testimonials/Product_User'
import Banner from '../Banner/Banner'
import Patient from '../Features/Patient'
import Info from '../Information/Info'

const Home = () => {
    return (
        <>
            <div >
                <Banner />
                <div >
                    <Features />
                    <Info/>
                    <Testimonials />
                    <Patient/>
                   
                </div>
            </div>
        </>
    )
}

export default Home
