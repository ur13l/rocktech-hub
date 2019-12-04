import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import ECImage from "./images/ec"
import ECLogo from "./images/ec-logo"
import RDLogo from "./images/rd-logo"
import RDImage from "./images/rd"
import CFImage from "./images/cf"
import CFLogo from "./images/cf-logo"
import AnalyticsLogo from "./images/an-logo"
import AnalyticsImage from "./images/an"

/**
 * BusinessUnitWrapper element, used to set style to a component.
 */
const BusinessUnitWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  align-items: center;
  grid-template-columns: minmax(0, 400px) auto;

  .item1 {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
  }

  .item2 {
    grid-column: 1;
    grid-row: 2;
    width: 100%;
  }

  .item3 {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    justify-self: right;
    text-align: right;
    width: 100%;

    a {
      text-align: right;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;

    .item1 {
      grid-column: 1;
      grid-row: 3;
      justify-self: center;
      * {
        margin: 0 auto;
      }
    }

    .item2 {
      grid-column: 1;
      grid-row: 2;
      justify-self: center;
    }

    .item3 {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
      text-align: right;
      justify-self: center;
      * {
        margin: 0 auto;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 100%;

    .item1 {
      grid-column: 1;
      grid-row: 3;
      justify-self: center;
      * {
        margin: 0 auto;
      }
    }

    .item2 {
      grid-column: 1;
      grid-row: 2;
      justify-self: center;
    }

    .item3 {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
      text-align: right;
      justify-self: center;

      * {
        margin: 0 auto;
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`

/**
 * BusinessUnit component
 */
const BusinessUnit = ({ unit }) => {
  switch (unit) {
    case "ec":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <a href="https://rocktech.mx">
              <ECLogo />
            </a>
          </div>
          <div className="item2">
            <p className="def">
              Rocktech Equity Crowdfunding es una plataforma de{" "}
              <b>tecnología financiera</b> enfocada en la institucionalización y
              capitalización de la pequeña y mediana empresa a través del{" "}
              <b>fondeo colectivo de capital</b>.
            </p>
          </div>
          <div className="item3">
            <a href="https://rocktech.mx">
              <ECImage />
            </a>
          </div>
        </BusinessUnitWrapper>
      )
    case "rd":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <a href="https://rd.rocktech.mx">
              <RDLogo />
            </a>
          </div>
          <div className="item2">
            <p className="def">
              Unidad dedicada a <b>investigar y desarrollar</b> software con el
              propósito de implantar nuevas tecnologías dentro de un modelo de
              negocio a través del análisis, definición e ingeniería de
              procesos.
            </p>
          </div>
          <div className="item3">
            <a href="https://rd.rocktech.mx">
              <RDImage />
            </a>
          </div>
        </BusinessUnitWrapper>
      )
    case "cf":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <a href="https://cf.rocktech.mx">
              <CFLogo />
            </a>
          </div>
          <div className="item2">
            <p className="def">
              Unidad dedicada a la institucionaización de negocios a través de {" "}
              <b>finanzas corporativas</b>, con el propósito de implementar una
              estructura de cumplimiento empresarial.
            </p>
          </div>
          <div className="item3">
            <a href="https://cf.rocktech.mx">
              <CFImage />
            </a>
          </div>
        </BusinessUnitWrapper>
      )
    case "an":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <AnalyticsLogo />
          </div>
          <div className="item2">
            <p className="def">
              Es una unidad con una propuesta para desarrollo de{" "}
              <b>análisis de información</b> mediante procesamiento de texto
              proveniente de archivos de texto( .txt o .csv ) o redes sociales.
            </p>
          </div>
          <div className="item3">
            <AnalyticsImage />
          </div>
        </BusinessUnitWrapper>
      )
    default:
      return <></>
  }
}

BusinessUnit.propTypes = {
  unit: PropTypes.string,
}

BusinessUnit.defaultProps = {
  unit: ``,
}

export default BusinessUnit
