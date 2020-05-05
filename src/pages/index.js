import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import "react-multi-carousel/lib/styles.css"
import CFLogo from "../components/images/cf-logo"
import RDLogo from "../components/images/rd-logo"
import ECLogo from "../components/images/ec-logo"


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
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin-bottom: 60px;
  }
  
  .business-units > a {
    text-align: center;
  }
  
  .link {
    transition: 0.3s;
  }
  
  .link:hover {
    transform: scale(1.1, 1.1);
  }
  
  .def-rocktech {
    font-size: 24px;
    text-align: center;
  }
  
    /* Small devices (Mobile phones) */
  @media only screen and (max-width: 768px) {
    .business-units {
      grid-template-columns: 1fr;
    }
  
  }
`

const IndexPage = () => (
  <LayoutWrapper>
    <Layout location="/">
      <SEO title="Rocktech Hub"/>
      <div className="container">
        <div className="rocktech-def">
          <p className="def-rocktech">
          Perfeccionamos, Optimizamos y Ofertamos Buenos Negocios.
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
            <a className={"link"} href={"https://crowd.rocktech.mx"}>
            <ECLogo/>
            </a>
          </div>

        </div>
      </div>
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
