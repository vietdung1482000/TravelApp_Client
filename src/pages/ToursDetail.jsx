import React, { useEffect, useRef, useState, useContext } from 'react'
import '../styles/TourDetail.css'
import Booking from '../components/Booking'
import NewsLetter from '../shared/NewsLetter'
import calculateAvgRating from '../utils/avgRating'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import avatar from '../assets/images/avatar.jpg'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const ToursDetail = () => {
  const { id } = useParams()
  const reviewRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const { user } = useContext(AuthContext)

  // const tour = TourData.find(tour => tour.id === id)
  // fetch data từ database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour
  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const reviewText = reviewRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message)
      }
      alert(result.message)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading........</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error && (
              <Row>
                <Col lg='8'>
                  <div className="tour__content">
                    <img src={photo} alt="" />

                    <div className="tour__info">
                      <h2>{title}</h2>
                      <div className='d-flex align-items-center gap-5'>
                        <span className='tour__rating d-flex align-items-center gap-1'>
                          <i class="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i> {avgRating === 0 ? null : avgRating}
                          {
                            totalRating === 0
                              ? ('Not Rated')
                              : (
                                <span>
                                  ({reviews?.length})
                                </span>
                              )
                          }
                        </span>
                        <span>
                          <i class="ri-map-pin-user-fill"></i> {address}
                        </span>
                      </div>
                      <div className="tour_extra-details">
                        <span><i class="ri-map-pin-2-line"></i> {city} </span>
                        <span><i class="ri-money-dollar-circle-line"></i> ${price}/per person</span>
                        <span><i class="ri-map-pin-time-line"></i> {distance} k/m</span>
                        <span><i class="ri-group-line"></i> {maxGroupSize} people</span>
                      </div>

                      <h5>Description</h5>
                      <p>{desc}</p>
                    </div>

                    <div className="tour__reviews mt-4">
                      <h4>Reviews ({reviews?.length} reviews)</h4>
                      <Form onSubmit={handleSubmit}>
                        <div className='d-flex align-content-center gap-3 mb-4 rating__group'>
                          <span onClick={() => setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                          <span onClick={() => setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                          <span onClick={() => setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                          <span onClick={() => setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                          <span onClick={() => setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                        </div>
                        <div className="review__input">
                          <input type="text" ref={reviewRef} placeholder='Share your thoughts' required />
                          <button className='btn primary__btn text-white' type='submit'>Submit</button>
                        </div>
                      </Form>
                      <ListGroup className='user_review'>
                        {
                          reviews?.map((review) => (
                            <div key={review._id} className="review__item">
                              <img src={avatar} alt="" />

                              <div className='w-100'>
                                <div className='d-flex align-items-center justify-content-between'>
                                  <div>
                                    <h5>{review.username}</h5>
                                    <p>
                                      {
                                        new Date(review.createdAt).toLocaleDateString("en-US", options)
                                      }
                                    </p>
                                  </div>
                                  <span className='d-flex align-content-center'>
                                    {review.rating} <i class="ri-star-s-fill"></i>
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                              </div>
                            </div>
                          ))
                        }
                      </ListGroup>
                    </div>
                  </div>
                </Col>
                <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating} />
                </Col>
              </Row>
            )
          }
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default ToursDetail