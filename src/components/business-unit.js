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
    justify-self: end;
    text-align: right;
    width: 100%;

  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;

    .item1 {
      grid-column: 1;
      grid-row: 3;
      justify-self: center;
      * {
        margin:0 auto;
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
        margin:0 auto;
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
        margin:0 auto;
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
        margin:0 auto;
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
            <ECLogo />
          </div>
          <div className="item2">
            <p className="def">
              Es una plataforma de <b>Tecnología Financiera</b> que tiene como
              propósito la generación de negocio entre empresas e inversionistas
              a través del fondeo colectivo de capital.
            </p>
          </div>
          <div className="item3">
            <ECImage />
          </div>
        </BusinessUnitWrapper>
      )
    case "rd":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <RDLogo />
          </div>
          <div className="item2">
            <p className="def">
              Es una unidad dedicada a investigar y desarrollar productos con el
              propósito de <b>implantar nuevas tecnologías</b> dentro del modelo
              de cada negocio a través del análisis, definición e ingeniería de
              procesos.
            </p>
          </div>
          <div className="item3">
            <RDImage />
          </div>
        </BusinessUnitWrapper>
      )
    case "cf":
      return (
        <BusinessUnitWrapper>
          <div className="item1">
            <CFLogo />
          </div>
          <div className="item2">
            <p className="def">
              Es una unidad de negocio de Rocktech, dedicada a diseñar modelos
              corporativos a través de{" "}
              <b>ingeniería financiera y análisis contable</b> con el propósito
              de implementar una estructura de cumplimiento empresarial.
            </p>
          </div>
          <div className="item3">
            <CFImage />
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
