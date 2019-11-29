import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import BigLogo from "./images/big-logo.js"
import { FaSearch, FaTimes, FaHamburger, FaBars } from "react-icons/fa"
import SearchPanel from "./search-panel"

/**
 * MenuWrapper element, used to set style to a component.
 */
const MenuWrapper = styled.div`
  background: #171717;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 2000;
  justify-content: left;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content min-content auto;
  text-transform: uppercase;
  transition: width 0.2s;
  color: #fff !important;

  div {
    padding: 12px 24px !important;
    margin: 0 !important;
  }

  .bottom {
    align-self: end;
    width: 100%;
  }

  .menu-close-icon {
    justify-self: end;
    text-align: right;
  }
`

/**
 * Menu component
 * @param {boolean} open
 */

class Menu extends Component {
  constructor() {
    super()
  }

  onClickClose() {
    const menu = document.getElementById("drawer-menu")
    menu.classList.add("menu-hidden")
  }

  /**
   * Render method
   */
  render() {
    return (
      <MenuWrapper id="drawer-menu" className="menu-hidden">
        <div className="menu-close-icon">
          <FaTimes onClick={() => this.onClickClose()} />
        </div>
        <div>
          <Link onClick={()=>{this.onClickClose()}} to="/">Inicio</Link>
        </div>
        <div>
          <Link onClick={()=>{this.onClickClose()}} to="/glosario">Glosario</Link>
        </div>
        <div>
          <Link onClick={()=>{this.onClickClose()}} to="/noticias">Noticias</Link>
        </div>
        <div className="bottom">
          <BigLogo location="menu" />
        </div>
      </MenuWrapper>
    )
  }
}

Menu.propTypes = {
  open: PropTypes.bool,
}

Menu.defaultProps = {
  open: false,
}

export default Menu
