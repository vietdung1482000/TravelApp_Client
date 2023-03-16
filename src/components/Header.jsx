import React, { useRef, useEffect, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../context/AuthContext'

const nav_links = [
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

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const sticky = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    sticky()
    return window.removeEventListener('scroll', sticky)
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {
                  nav_links.map((item, index) => (
                    <li className='nav_item' key={index}>
                      <NavLink to={item.path} className={NavLink => NavLink.isActive ? "active_link" : ""}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">

                {
                  user
                    ? <>
                      <h5 className='mb-0'>{user.username}</h5>
                      <button className='btn btn-dark' onClick={logout}>LOGOUT</button>
                    </>
                    : <>
                      <Button className='btn secondary__btn'>
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button className='btn primary__btn'>
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                }
              </div>

              <span className='mobile_menu' onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header