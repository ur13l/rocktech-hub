import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import ECImage from "./images/ec"
import ECLogo from "./images/ec-logo"

/**
 * BusinessUnitWrapper element, used to set style to a component.
 */
const BusinessUnitWrapper = styled.div`
  
  
`

/**
 * BusinessUnit component
 */

const BusinessUnit = ({title, description}) => 
  {
    return (
      <BusinessUnitWrapper>
        <ECLogo>
            
        </ECLogo>
      </BusinessUnitWrapper>
    )
  }


BusinessUnit.propTypes = {
  location: PropTypes.string,
}

BusinessUnit.defaultProps = {
  location: ``,
}

export default BusinessUnit