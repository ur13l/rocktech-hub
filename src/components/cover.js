import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import BigLogo from "./images/big-logo"

/**
 * CoverWrapper element, used to set style to a component.
 */
const CoverWrapper = styled.div`
  background: #171717;
  div {
    margin: 0 auto;
    width: 100%;
    padding: 0.5rem 0rem;
    height: 85vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      align-self: center;
    }
  }
  p {
    text-align: center;
    margin: 0;
  }
  p.deflat {
    text-align: center;
    color: #5c5c5c;
    padding: 0 30px;
  }

  .big-logo-container {
    padding: 0 30px;
  }

  p.def {
    margin-bottom: 10vh;
    color: #707070;
    padding: 0 30px;
  }

  h3.disrupt-title {
    text-align: center;
    margin-top: -25vh;
    padding: 0 30px;
  }
  
  .link {
    transition: 0.3s;
  }
  
  .link:hover {
    transform: scale(1.1, 1.1);
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    div {
      height: 75vh;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    div {
      height: 80vh;
    }
  }
`

/**
 * Cover component
 * @param {string} location
 */

const Cover = ({ location }) => {
  if (location === "/") {
    return (
      <CoverWrapper>
        <div className="big-logo-container">
            <BigLogo location={location} />
        </div>
        <h3 className="disrupt-title">Business Engineering:</h3>
        <p className="deflat">
         Ingeniería de Empresarial o Ingeniería de Negocios.
        </p>
        <p className="def">(BE) Es el desarrollo e implementación de soluciones empresariales.<br/> 
        Desde sistemas y tecnologías de la informaciòn hasta el perfeccionamiento de la estructura organizacional 
        y la optimización de procesos.</p>
      </CoverWrapper>
    )
  }
  return <></>
}

Cover.propTypes = {
  location: PropTypes.string,
}

Cover.defaultProps = {
  location: ``,
}

export default Cover
