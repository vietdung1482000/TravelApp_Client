import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import CommonSection from '../shared/CommonSection'
import ToursCard from '../shared/ToursCard'
import NewsLetter from '../shared/NewsLetter'

const SearchList = () => {

  // useLocation sẽ giúp lấy thông tin từ URL hiện tại
  const location = useLocation()

  const [data] = useState(location.state)
  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {
              data.length === 0
                ? <h4 className='text-center'>No Tour Found</h4>
                : data?.map(tour => (
                  <Col key={tour._id} lg='3' className='mb-4'><ToursCard tour={tour} /></Col>
                ))
            }
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default SearchList