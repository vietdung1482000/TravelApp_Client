import React from 'react'
import '../styles/Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick_linkss = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="social__link d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-facebook-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-twitter-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick_links.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick_linkss.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className="ps-0 border-0 d-flex align-content-center gap-3">
                <h6 className='mb-0 d-flex align-content-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>TP Đà Nẵng</p>
              </ListGroupItem>
            </ListGroup>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className="ps-0 border-0 d-flex align-content-center gap-3">
                <h6 className='mb-0 d-flex align-content-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>dungvv@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className="ps-0 border-0 d-flex align-content-center gap-3">
                <h6 className='mb-0 d-flex align-content-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+0334.751.943</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright © {year}, Design by google temple and Develop by Dungvv</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer