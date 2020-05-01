import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import Iso from "./images/iso"

/**
 * FooterWrapper element, used to set style to a component.
 */
const FooterWrapper = styled.footer`
  width: 99%;
  color: #707070;
  padding-top:36px;
  padding-bottom:36px;
  border-top: 1px solid #707070;

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
    
  }

  .footer-separator {
    border-top: 1px solid #707070;
  }

  .address {
    font-size: 10px;
    line-height: normal;
  }

  .item4 {
    ul {
      padding:0;
      margin: 0;
    }
  }

  .item5 {
    display: grid;
  }

  .sn {
    font-size: 30px;
  }

  .sn1 {
    grid-column: 1 / span 5;
    align-items: start;
    justify-items: left;
    ul {
      margin-left: 0;
      margin-bottom: 12px;
    }
  }

  .space-icon{
    margin-left: 5px;
    margin-right: 5px;
  }

  br,
  p  {
    margin: 0;
  }
  ul  {
    li {
      list-style: none;
      color: white;
      padding: 6px 30px;
      text-transform: uppercase;
      font-size: 14px;
      padding-left: 0;
      a  {
        color: white;
      }
    }
  }

  .no-top {
    padding-top: 0;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 767px) {
    div.grid {
      grid-template-columns: 100%;
      grid-gap: 12px;
    }

    .item1 {
      grid-column: 1;
      grid-row: 1;
    }

    .item2 {
      grid-column: 1;
      grid-row: 2;
    }

    .item3 {
      grid-column: 1;
      grid-row: 3;
    }

    .item4 {
      grid-column: 1;
      grid-row: 4;
    }

    .item5 {
      grid-column: 1;
      grid-row: 5;
    }

    .item {
      justify-self: center;
      text-align:center;
      
      li {
        padding: 0;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    div.grid {
      grid-template-columns: 50% 50%;
    }

    .item1 {
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    .item2 {
      grid-column: 1;
      grid-row: 2;
    }

    .item3 {
      grid-column: 1;
      grid-row: 3;
    }

    .item4 {
      grid-column: 2;
      grid-row: 2;
      text-align: center;
    }

    .item5 {
      grid-column: 2;
      grid-row: 3;
      text-align: center;
    }
    .item {
      justify-self: center;
      padding: 12px;
      li {
        padding: 0;
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    div.grid {
      grid-template-columns: auto auto auto auto auto;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    div.grid {
      grid-template-columns: auto auto auto auto auto;
    }
  }
`

/**
 * Footer component
 * @param {string} siteTitle
 * @param {string} locationfe
 */

const Footer = ({ siteTitle, location }) => {
  return (
    <FooterWrapper>
      <div className="container grid">
        <div className="item item1">
          <Iso />
        </div>
        <div className="item item2">
          <h5 className="footer-title footer-color">Oficina Central</h5>
          <a
            className="address footer-color"
            href="https://g.page/Rocktech?share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Av. Cerro Gordo del Campestre 201 Int. 303
              <br />
              Col. Las Quintas, León, Gto.
              <br />
              C.P. 37125
              <br />
              477 688 89 86.
            </p>
          </a>
        </div>
        <div className="item item3">
          <h5 className="footer-title footer-color">Corporativo</h5>
          <a
            className="address footer-color"
            href="https://goo.gl/maps/vFqDoMThoGVdxtkn8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="address">
              Capital Reforma
              <br />
              Avenida Paseo de la Reforma #250
              <br />
              Torre 1 Reforma #16, Piso 11 Col. Juárez,
              <br />
              Delegación Cuauhtémoc, CDMX.
            </p>
          </a>
        </div>
        <div className="item item5">
          <div className="sn1">
          </div>
          <div className="sn sn2">
            <a
              className="footer-color space-icon"
              href="https://twitter.com/rocktechmx?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="sn sn3">
            <a
              className="footer-color space-icon"
              href="https://www.linkedin.com/company/rocktechgroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="sn sn4">
            <a
              className="footer-color space-icon"
              href="https://www.facebook.com/rocktechgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="sn sn5">
            <a
              className="footer-color space-icon"
              href="https://www.instagram.com/rocktechmx/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="sn sn5">
            <a
              className="footer-color space-icon"
              href="mailto:soporte@rocktech.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdMail />
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
