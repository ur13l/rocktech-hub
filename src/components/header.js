import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from "./images/logo.js"
import { FaSearch, FaTimes } from "react-icons/fa"

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

    ul  {
      float: right;
      height: 50px;
      line-height: 50px;
      li {
        display: inline-block;
        color: white;
        padding: 10px 30px;
        text-transform: uppercase;
        line-height: normal;
        font-size: 14px;
      }
    }
  }

  a  {
    vertical-align: middle;
    color: #fff !important;
  }

  .is-hidden {
    visibility: hidden;
    height:0px !important;
    width: 0px;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden;
  }

  .pointer {
    cursor: pointer;
  }

  .large-input {
    background: none;
    border: none;
    border-bottom: 2px solid #fff;
    color: white;
    font-size: 30px;
    transition: width 0.3s;
    padding-right:48px;
    width: 0%;
    height:0%;
    float:right;
    box-sizing: border-box;
  }

  .large-input:focus {
    outline: 0;
  }

  .closable {
    position:relative;
    display:inline-block;
    width: 100%;
    font-size: 40px !important;
  }


  .input-full-width {
    width: 100% !important;
    height: 45px;
  }

  .closable_close {
    position: absolute;
    right:0;
    top:0;
    padding: 0 12px;
    cursor:pointer;
    color: #fff;
  }

  #header-search {
    height: 70px;
    padding-top: 33px;
  }

`

/**
 * Header component
 * @param {string} siteTitle
 * @param {string} location
 */

const Header = ({ siteTitle, location }) => {
  /**
   * Method called when the search icon or the close icon are clicked.
   */
  const onClickSearchToggle = () => {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const indicators = document.getElementById("indicators")
    headerSearch.classList.toggle("is-hidden")
    headerContent.classList.toggle("is-hidden")
    indicators.classList.toggle("is-hidden")
    headerInput.classList.toggle("input-full-width");
    headerInput.focus();
  }

  const onClickCancel = () => {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const indicators = document.getElementById("indicators")
    headerInput.classList.toggle("input-full-width");
    
    setTimeout(()=>{
      headerSearch.classList.toggle("is-hidden")
      headerContent.classList.toggle("is-hidden")
      indicators.classList.toggle("is-hidden")
    }, 300)
  }


  return (
    <HeaderWrapper>
      <div id="header-search" className="container is-hidden">
        <span className="closable">
          <input className="large-input" type="search" placeholder="¿Qué quieres encontrar?" />
          <FaTimes className="closable_close" onClick={() => {onClickCancel()}}/>
        </span>
      </div>
      <div id="header-content" className="container">
        <Logo location={location} />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Glosario</Link>
          </li>
          <li>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className="icon">
            <div
              className="pointer"
              onClick={() => {
                onClickSearchToggle()
              }}
            >
              <FaSearch />
            </div>
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
