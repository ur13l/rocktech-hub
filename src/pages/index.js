import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import BusinessUnit from "../components/business-unit"
import 'react-multi-carousel/lib/styles.css';

const LayoutWrapper = styled.div`
  background-color: #171717;
  min-height:99%;
  color: white;

  .rocktech-def {
    padding-top:6vh;
    margin-bottom: 12vh;
  }
  
  .react-multi-carousel-dot {
    margin: 21px;
  }
`

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const IndexPage = () => (
  <LayoutWrapper>
    <Layout location="/">
      <SEO title="Rocktech Hub" />
      <div className="container">
        <div className="rocktech-def">
            <h3>¿Qué es Rocktech?</h3>
            <p className="def">
              Rocktech es una empresa de tecnología financiera que fomenta la inversión en innovación y analítica de mercados, con el propósito de incrementar el valor a cada negocio.
            </p>
        </div>
        <div className="units">
          <h3>Unidades de negocio</h3>
          
          <Carousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={10000}
            infinite={true}
            showDots={true}
            swipeable={false}
            draggable={false}
            removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
            >
            <BusinessUnit unit="ec"/>
            <BusinessUnit unit="rd"/>
            <BusinessUnit unit="cf"/>
            <BusinessUnit unit="an"/>
          </Carousel>
        </div>
      </div>
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
