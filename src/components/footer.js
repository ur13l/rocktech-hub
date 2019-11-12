import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from "./images/logo.js"
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram, FaLink } from "react-icons/fa"

/**
 * FooterWrapper element, used to set style to a component.
 */
const FooterWrapper = styled.footer`
  width: 99%;
  color: #707070;

  ul li {
    margin: 0;
    padding: 0;
  }

  .footer-title {
    margin-bottom: 6px;
    font-weight: normal !important;
    font-size: 14px;
  }
  
  .footer-color {
    color: #707070;
  }
  
  div.grid {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: auto auto auto auto auto;
  }

  .footer-separator {
    border-top: 1px solid #707070;
  }

  .address {
    font-size: 10px;
    line-height: normal;
  }

  .item5 {
    display: grid;
  }

  .sn {
    font-size: 30px;
  }

  .sn1 {
    grid-column: 1 / span 4; 
    align-items: start;
    justify-items: left;
    ul {
      margin-left:0;
      margin-bottom:12px;
    }
  }

  br, p {
    margin:0;
  }
  ul {
      
      li {
        list-style: none;
        color: white;
        padding: 6px 30px;
        text-transform: uppercase;
        font-size:14px; 
        padding-left: 0;
        a {
          color: white;
        }
      }
    }
`

/**
 * Footer component
 * @param {string} siteTitle
 * @param {string} locationfe
 */

const Footer = ({ siteTitle, location }) => 
  {
    return (
      <FooterWrapper>
        <div className="container">
          <hr className="footer-separator"/>
        </div>
        <div className="container grid">
          <div className="item item1">
            <Logo/>
          </div>
          <div className="item item2"> 
            <h5 className="footer-title footer-color">Oficina Central</h5>
            <a className="address footer-color" href="https://g.page/Rocktech?share" target="_blank">
            <p>Av. Cerro Gordo del Campestre 201 Int. 303<br/>
              Col. Las Quintas, León, Gto.<br/>
              C.P. 37125<br/>
              477 688 89 86.
            </p>
            </a>
          </div>
          <div className="item item3">
          <h5 className="footer-title footer-color">Corporativo</h5>
            <a className="address footer-color" href="https://goo.gl/maps/vFqDoMThoGVdxtkn8" target="_blank">
              <p className="address">Capital Reforma<br/>
                  Avenida Paseo de la Reforma #250<br/>
                  Torre 1 Reforma #16, Piso 11 Col. Juárez,<br/>
                  Delegación Cuauhtémoc, CDMX.
              </p>
            </a>
          </div>
          <div className="item item4"> 
            <ul>
              <li>
              <Link className="footer-color" to="/">Inicio</Link></li>
              <li>
              <Link className="footer-color" to="/">Glosario</Link></li>
              <li>
              <Link className="footer-color" to="/noticias">Noticias</Link></li>
            </ul>
          </div>
          <div className="item item5"> 
            <div className="sn1">       
              <ul>
                <li>
                  <Link className="footer-color uppercase" to="/">Aviso de privacidad</Link>
                </li>
              </ul>
            </div>
            <div className="sn sn2">
              <a className="footer-color" href="https://twitter.com/rocktechmx?lang=en" target="_blank">
              <FaTwitter/>
              </a>
            </div>
            <div className="sn sn3">
              <a className="footer-color" href="https://www.linkedin.com/company/rocktechgroup" target="_blank">
              <FaLinkedin/>
              </a>
            </div>
            <div className="sn sn4">
              <a className="footer-color" href="https://www.facebook.com/rocktechEquityCrowdfunding/" target="_blank">
              <FaFacebookF/>
              </a>
            </div>
            <div className="sn sn5">
              <a className="footer-color" href="https://www.instagram.com/rocktechmx/?hl=en" target="_blank">
              <FaInstagram/>
              </a>
            </div>
          </div>
        </div>

      
      </FooterWrapper>
    )
  }


Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer