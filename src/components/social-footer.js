import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"

/**
 * SocialFooterWrapper element, used to set style to a component.
 */
const SocialFooterWrapper = styled.div`
  background-color: #fff;

  padding-bottom: 42px;

  p  {
    margin: 0;
  }

  .sf-grid {
    padding-top: 42px !important;
    border-top: 1px solid #d0d0d0;
    display: grid;
    grid-template-columns: auto auto;
    align-content: center;
  }

  .twitter-link {
    color: #00b5ff;
  }
  .elem1 {
    align-self: center;
    align-content: center;
  }

  .elem2 {
    justify-self: right;
    align-self: center;
  }

  h1 {
    margin: 0;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 992px) {
    .sf-grid {
      grid-template-columns: 100%;
    }
  }
`

/**
 * Header component
 * @param {Object} post
 */

const SocialFooter = ({ post }) => {
  return (
    <SocialFooterWrapper>
      <div className="container sf-grid">
        <div className="elem1">
          <h1 className="elem1">¿Qué más quieres saber?</h1>
        </div>
        <div className="elem2">
          <p>¿Tienes alguna sugerencia de contenido?</p>
          <p>
            Te escuchamos, twitteanos a&nbsp;
            <a
              className="twitter-link black"
              href="https://twitter.com/rocktechmx"
            >
              @RocktechMX
            </a>
          </p>
        </div>
      </div>
    </SocialFooterWrapper>
  )
}

SocialFooter.propTypes = {
  siteTitle: PropTypes.string,
}

SocialFooter.defaultProps = {
  siteTitle: ``,
}

export default SocialFooter
