import { Link, StaticQuery } from "gatsby"
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
  display:grid;
  grid-gap: 50px;
  grid-template-columns: minmax(0, 400px) auto;
  align-items: center;
  .item1 {
      grid-column: 1;
      grid-row: 1;
  }

  .item2 {
    grid-column: 1;
    grid-row: 2;
  }

  .item3 {
    grid-column: 2 / span 3;
    grid-row: 1 / span 2; 
     align-self: center;
    justify-self:end;
    text-align: right;
    
  }
`

/**
 * BusinessUnit component
 */

const BusinessUnit = ({unit}) => 
  {
    switch(unit) {
      case "ec": 
        return (
          <BusinessUnitWrapper>
            <div className="item1">
                <ECLogo/>
            </div>
            <div className="item2">
              <p className="def">
              Es una plataforma de <b>Tecnología Financiera</b> que tiene como propósito la generación de negocio entre empresas e inversionistas a través del fondeo colectivo de capital.
              </p>
            </div>
            <div className="item3">
              <ECImage/>
            </div>
          </BusinessUnitWrapper>)
        break;
      case "rd": 
        return (
          <BusinessUnitWrapper>
            <div className="item1">
                <RDLogo/>
            </div>
            <div className="item2">
              <p className="def">
              Es una unidad dedicada a investigar y desarrollar productos con el propósito  de <b>implantar nuevas tecnologías</b> dentro del modelo de cada negocio a través del análisis,  definición e ingeniería de procesos.
              </p>
            </div>
            <div className="item3">
              <RDImage/>
            </div>
          </BusinessUnitWrapper>)
          break;
      case "cf": 
        return (
          <BusinessUnitWrapper>
            <div className="item1">
                <CFLogo/>
            </div>
            <div className="item2">
              <p className="def">
              Es una unidad de negocio de Rocktech, dedicada a diseñar modelos corporativos a través de <b>ingeniería financiera y  análisis contable</b> con el propósito de implementar una estructura de cumplimiento empresarial. 
              </p>
            </div>
            <div className="item3">
              <CFImage/>
            </div>
          </BusinessUnitWrapper>)
          break;
      case "an": 
          return (
            <BusinessUnitWrapper>
              <div className="item1">
                  <AnalyticsLogo/>
              </div>
              <div className="item2">
                <p className="def">
                Es una unidad con una propuesta para desarrollo de <b>análisis de información</b> mediante procesamiento de texto proveniente de archivos de texto( .txt o .csv ) o redes sociales.
                </p>
              </div>
              <div className="item3">
                <AnalyticsImage/>
              </div>
            </BusinessUnitWrapper>)
            break;
    }
    
    
  }


BusinessUnit.propTypes = {
  unit: PropTypes.string,
}

BusinessUnit.defaultProps = {
  unit: ``,
}

export default BusinessUnit