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

const GlobalStyles = styled.div`
  h3 {
    text-transform: uppercase;
    color: #A0A0A0;
    letter-spacing: 5px;
  } 

  h5 {
    text-transform: uppercase;
    color: #A0A0A0;
  } 

  .container {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0.5rem 0rem;
  }

  p.deflat {
    font-style: italic;
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
      <Cover location={ location } />
      <Indicators location={location} />
      <div className="container">
        <main>{children}</main>
        <Footer/>
      </div>
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
