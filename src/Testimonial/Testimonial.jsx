import React from 'react'
import Slider from 'react-slick'
import sl01 from '../assets/images/ava-1.jpg'
import sl02 from '../assets/images/ava-2.jpg'
import sl03 from '../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings = {
        slidesToShow: 3,
        infinite: true,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        swipeToSlide: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est id quo, fuga delectus placeat sapiente ipsam nam sunt laudantium adipisci optio ea nesciunt! Incidunt fugiat possimus optio ab soluta.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={sl01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6>Dungvv</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est id quo, fuga delectus placeat sapiente ipsam nam sunt laudantium adipisci optio ea nesciunt! Incidunt fugiat possimus optio ab soluta.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={sl02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6>Dungvv</h6>
                        <p>Longtime Customers</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est id quo, fuga delectus placeat sapiente ipsam nam sunt laudantium adipisci optio ea nesciunt! Incidunt fugiat possimus optio ab soluta.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={sl03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6>Dungvv</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est id quo, fuga delectus placeat sapiente ipsam nam sunt laudantium adipisci optio ea nesciunt! Incidunt fugiat possimus optio ab soluta.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={sl02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6>Dungvv</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial