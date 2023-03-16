import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: ' You gotta dance like there’s nobody watching, it’s heaven on earth'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: ' You gotta dance like there’s nobody watching, it’s heaven on earth'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: ' You gotta dance like there’s nobody watching, it’s heaven on earth'
    },
]

const ServiceList = () => {
    return (
        <>
            {
                servicesData.map((item, index) => <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                    <ServiceCard item={item} />
                </Col>)
            }
        </>
    )
}

export default ServiceList