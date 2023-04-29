import React ,{useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles/home.css'
import heroImg from '../assets/images/hero-img.png'
import { Container,Row,Col} from 'reactstrap'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'



const Home = () => {


  const [trendingProducts, setTrendingProducts]= useState([])
  const [bestSalesProducts, setBestSalesProducts]= useState([])
  const [mobileProducts, setMobileProducts]= useState([])
  const [wirelessProducts, setWirelessProducts]= useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts =products.filter((
      item)=> item.category ==='chair'
      )

      const filterBestSalesProducts =products.filter(
        (item)=>item.category==='sofa')

        const filteredMobileProducts = products.filter(
          (item)=>item.category==='mobile')

          const filteredWirelessProducts = products.filter(
            (item)=>item.category==='wireless')

            const filteredPopularProducts = products.filter(
              (item)=> item.category==='watch'
            )

      setTrendingProducts(filteredTrendingProducts)
      setBestSalesProducts(filterBestSalesProducts)
      setMobileProducts(filteredMobileProducts)
      setWirelessProducts(filteredWirelessProducts)
      setPopularProducts(filteredPopularProducts)
  },[]);

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}</p>
              <h2>We have the best designs to suit your design taste</h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Doloribus repudiandae, facere fuga impedit eos dolore cum.
                  Unde, natus veniam. Nemo doloremque minus, odit adipisci dolorum possimus nobis et enim sunt!
              </p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to ='shop'> SHOP NOW</Link> </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      
      <Services />
      <br></br>
      <br></br>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <br></br>
      <br />

      <section className="best__sales">
      <Container>
      <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
      </Container>
      </section>

      <section className="timer__count">
          <Container>
            <Row>
            <Col lg='6' md='6'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 pt-5 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                <Clock/>

                </div>
                <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                  <Link to='/shop'>Visit Store </Link>
                  </motion.button>
              
             
            </Col>
              <Col lg='6' md='6' className='text-end'>
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
          </section>

              <br />
              <br />
          <section className="new__arrivals">
            <Container>
              <Row>
              <Col lg='12' className='text-center mb-3'>
                <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
              </Row>
            </Container>
          </section>

              <br />
              <br />
          <section className="popular__category">
          <Container>
              <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
           
              </Row>
            </Container>
          </section>
    </Helmet>
  )
}

export default Home