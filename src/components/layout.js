/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Indicators from "./indicators"
import Cover from "./cover"
import "./layout.module.css"
import styled from "styled-components"
import Footer from "./footer"
import SearchPanel from "./search-panel"

const GlobalStyles = styled.div`
  h2 {
    text-transform: uppercase;
    color: #a0a0a0;
    letter-spacing: 6px;
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 800;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 800;
  }

  h3 {
    text-transform: uppercase;
    color: #a0a0a0;
    letter-spacing: 3px;
    font-weight: 800;
  }

  h5 {
    text-transform: uppercase;
    color: #a0a0a0;
    letter-spacing: 1px;
    margin: 0px;
    font-weight: 800;
  }

  .is-hidden {
    visibility: hidden;
    height: 0px !important;
    width: 0px;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden;
  }

  .container {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0.5rem 0rem;
  }

  p.deflat {
    font-style: italic;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .white-background {
    background: white;
  }

  .section {
    width: 100%;
  }

  .italic {
    font-style: italic;
  }

  .black {
    font-weight: 800;
  }

  .truncate-text {
    color: #707070;
  }

  .no-scroll {
    overflow-y: hidden !important ;
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <GlobalStyles>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Cover location={location} />
      <Indicators location={location} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
