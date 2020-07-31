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

  .phrase{
    background-color: #FFF;
    color: #000;
    font-weight: bold;
    padding: 7px;

  }

  .border{
    border: solid 1px white;
    padding: 5px;
  }

  .cf{
    color: rgb(192,137,6);
  }

  .rd{
    color: rgb(42,70,139);
  }

  .ec{
    color: rgb(16,128,128);
  }

  .align-center{
    text-align: center;
    margin-bottom: 40px;
  }

  .rocktech-def {
    padding-top: 6vh;
    margin-bottom: 10vh;
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
    margin-top: 10px !important;
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
        <p className="def align-center">
        <span className="phrase">Rocktech es una empresa de ingeniería de negocios que promueve la 
        institucionalización, innovación y la inversión desde sus tres 
        unidades de negocio; <b className="cf">finanzas corporativas</b>, <b className="rd">investigación + 
        desarrollo</b> y <b className="ec">fondeo colectivo de capital</b>.</span>
          </p>
          <p className="def-rocktech">
          <span className="border">Perfeccionamos, Optimizamos y Ofertamos Buenos Negocios.</span>
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
            <a className={"link"} href={"https://rocktech.mx"}>
            <ECLogo/>
            </a>
          </div>

        </div>
      </div>
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
