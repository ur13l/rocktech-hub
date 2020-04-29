import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import "react-multi-carousel/lib/styles.css"
import CFLogo from "../components/images/cf-logo"
import RDLogo from "../components/images/rd-logo"

const LayoutWrapper = styled.div`
  background-color: #171717;
  min-height: 99%;
  color: white;

  .rocktech-def {
    padding-top: 6vh;
    margin-bottom: 12vh;
  }

  .react-multi-carousel-dot  {
    margin: 21px;
  }

  a {
    color: inherit !important;
  }
  
  .business-units {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  
  .business-units > a {
    tex-align: center;
  }
  
  .link {
    transition: 0.3s;
  }
  
  .link:hover {
    transform: scale(1.1, 1.1);
  }
  
  .def-rocktech {
    font-size: 24px;
  }
  
    /* Small devices (Mobile phones) */
  @media only screen and (max-width: 768px) {
    .business-units {
      grid-template-columns: 1fr;
    }
  
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
}

const IndexPage = () => (
  <LayoutWrapper>
    <Layout location="/">
      <SEO title="Rocktech Hub"/>
      <div className="container">
        <div className="rocktech-def">
          <p className="def-rocktech">
            Rocktech es una empresa Business Technology que fomenta la
            institucionalización, capitalización e innovación a través de
            finanzas corporativas, investigación, desarrollo y analítica de
            datos, con el propósito de generar valor.
          </p>
        </div>
        <div className="units">
          <div className="business-units">
            <a className={"link"} href={"https://cf.rocktech.mx"}>
            <CFLogo/>
            </a>
            <a className={"link"} href={"https://rd.rocktech.mx"}>
            <RDLogo/>
            </a>
          </div>

        </div>
      </div>
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
