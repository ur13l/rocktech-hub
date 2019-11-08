import { Link, StaticQuery } from "gatsby"
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
    display:flex;
    justify-content: center;
    align-items: center;
    div {
        align-self: center
    }
  }
  p {
    text-align: center;
    margin: 0;
  }
  p.deflat {
    text-align: center;
    color: #5c5c5c;
  }

  p.def {
    margin-bottom: 10vh;
    color: #707070;
  }

  h3.disrupt-title {
    text-align: center;
    margin-top: -25vh;
  }
  
`

/**
 * Cover component
 * @param {string} location
 */

const Cover = ({ location }) => 
  {
    return (
      <CoverWrapper>
        <div>
          <BigLogo location={location}/>
        </div>
        <h3 className="disrupt-title">Disrumpir:</h3>
        <p className="deflat">del lat. disruptio, -ōnis, var. de diruptio, -ōnis ‘rotura, fractura’.</p>
        <p className="def">Alude a realizar las cosas de manera diferente.</p>
        
      </CoverWrapper>
    )
  }


Cover.propTypes = {
  location: PropTypes.string,
}

Cover.defaultProps = {
  location: ``,
}

export default Cover