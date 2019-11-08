import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from "./images/logo.js"
import { FaSearch } from "react-icons/fa"

/**
 * HeaderWrapper element, used to set style to a component.
 */
const HeaderWrapper = styled.header`
  background: #171717;
  width: 100%;
  div {
    margin: 0 auto;
    max-width: 96%;
    padding: 0.5rem 0rem;

    ul {
      float:right;
      height:50px;
      line-height: 50px;
      li {
        display: inline-block;
        color: white;
        padding: 10px 30px;
        text-transform: uppercase;
        line-height: normal;
        font-size:14px; 
        a {
          vertical-align: middle;
          color: white;
        }
      }
    }
  }
`

/**
 * Header component
 * @param {string} siteTitle
 * @param {string} location
 */

const Header = ({ siteTitle, location }) => 
  {
    return (
      <HeaderWrapper>
        <div>
          <Logo location={location}/>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Glosario</Link>
            </li>
            <li>
              <Link to="/">Noticias</Link>
            </li>
            <li class="icon">
              <Link to="/">
                <FaSearch/>
              </Link>
            </li>
          </ul>
         
        </div>
      </HeaderWrapper>
    )
  }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header