import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from "./images/logo.js"
import { FaSearch, FaTimes, FaHamburger, FaBars } from "react-icons/fa"
import SearchPanel from "./search-panel"

/**
 * HeaderWrapper element, used to set style to a component.
 */
const HeaderWrapper = styled.header`
  width: 100%;
  div {
    margin: 0 auto;
    padding: 0.5rem 0rem;

    ul  {
      float: right;
      height: 50px;
      line-height: 50px;
      li {
        display: inline-block;
        color: white;
        padding: 10px 12px 10px 48px;
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
    padding-right: 48px;
    width: 0%;
    height: 0%;
    float: right;
    box-sizing: border-box;
  }

  .large-input:focus {
    outline: 0;
  }

  .closable {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 40px !important;
  }

  .input-full-width {
    width: 100% !important;
    height: 45px;
  }

  .closable_close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px 0px 27px 0px;
    cursor: pointer;
    color: #fff;
  }

  #header-search  {
    height: 70px;
    padding-top: 33px;
  }

  #header-content {
    height:70px;
  }

  .last-item {
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
  #search-panel {
    margin: 0;
    padding: 0;
  }


`

/**
 * Header component
 * @param {string} siteTitle
 * @param {string} location
 */

const Header = ({ siteTitle, location }) => {
  let q = ""

  /**
   * Method called when the search icon or the close icon are clicked.
   */
  const onClickSearchToggle = () => {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const indicators = document.getElementById("indicators")
    headerSearch.classList.toggle("is-hidden")
    headerContent.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")

    if (location !== "/") {
      indicators.classList.toggle("is-hidden")
    }
    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }

  /**
   * Called when the close button on the search bar is clicked.
   */
  const onClickCancel = () => {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const indicators = document.getElementById("indicators")
    const searchPanel = document.getElementById("search-panel")

    headerInput.classList.toggle("input-full-width")
    headerInput.value = ""
    setTimeout(() => {
      headerSearch.classList.toggle("is-hidden")
      headerContent.classList.toggle("is-hidden")
      headerMobile.classList.toggle("is-hidden")

      if (location !== "/") {
        indicators.classList.toggle("is-hidden")
      }
      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:inherit"
      document.documentElement.style = "overflow:scroll"
    }, 300)
  }


  /**
   * Listener to the key characters introduced on search box.
   */
  const onKeyUp = () => {
    const headerInput = document.getElementsByClassName("large-input")[0]
    const searchPanel = document.getElementById("search-panel")
    q = headerInput.value
    window.scrollTo(0, 0)
    if (q.length >= 3) {
      searchPanel.classList.remove("is-hidden")
      document.body.style = "overflow:hidden"
      document.documentElement.style = "overflow:hidden"
    } else if (q.length <= 3) {
      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:inherit"
      document.documentElement.style = "overflow:scroll"
    }
  }

  return (
    <HeaderWrapper>
      <div id="header-search" className="container is-hidden">
        <span className="closable">
          <input
            onKeyUp={() => {
              onKeyUp()
            }}
            className="large-input"
            type="search"
            placeholder="¿Qué quieres encontrar?"
          />
          <FaTimes
            className="closable_close"
            onClick={() => {
              onClickCancel()
            }}
          />
        </span>
      </div>
      <div id="header-content" className="container hide-on-med-and-down">
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
          <li>
            <div
              className="search-icon-container pointer"
              onClick={() => {
                onClickSearchToggle()
              }}
            >
              <FaSearch />
            </div>
          </li>
        </ul>
      </div>
      <div id="header-mobile" className="container hide-on-large-and-up">
        <ul>
          <li>
            <div
              className="search-icon-container pointer"
              onClick={() => {
                onClickSearchToggle()
              }}
            >
              <FaSearch />
            </div>
          </li>
        </ul>
      </div>
      <SearchPanel id="search-panel" />
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
