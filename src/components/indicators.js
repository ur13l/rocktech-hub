import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"

/**
 * HeaderWrapper element, used to set style to a component.
 */
const IndicatorsWrapper = styled.div`
  background: #171717;
  height:50px;
  
  div {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0.5rem 0rem;
    hr {
      border-top: 1px solid white;
    }
    
  }
`

/**
 * Indicators component
 * @param {string} location
 */

const Indicators = ({ location }) => 
  {
    return (
      <IndicatorsWrapper>
        <div>
          <hr/>
            <div>
              
            </div>
          <hr/>
        </div>
      </IndicatorsWrapper>
    )
  }


Indicators.propTypes = {
  location: PropTypes.string,
}

Indicators.defaultProps = {
  location: `/`,
}

export default Indicators