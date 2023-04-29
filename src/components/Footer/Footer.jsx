import React from 'react'
import './footer.css'
import { Container,Row,Col, ListGroup,ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
   const year = new Date().getFullYear()

  return (
   <footer className="footer">
     <Container>
      <Row>
        <Col lg='4'>
        <div className='logo mb-3'>
               <div>
                <h1 className='text-white'>Ogees Store</h1>
               </div>
               </div>

               <p className="footer__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Saepe blanditiis odio porro tempora a, voluptatem minima dignissimos nesciunt est maiores?
               </p>
        </Col>

        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
         
          </div>
        </Col>

        <Col lg='2'> <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
         
          </div>
          </Col>

        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacts</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>Port-Harcourt , Rivers State , Nigeria</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-phone-line'></i></span>
                  <p>+2447045334986</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
             </div>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright ">
            Copyright {year} developed by Okandu Chimenem. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
   </footer>

  )
}

export default Footer