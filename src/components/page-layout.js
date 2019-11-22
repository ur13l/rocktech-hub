/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.module.css"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialFooter from "./social-footer"


const LayoutWrapper = styled.div`
  .section {
    padding-bottom: 42px;
  }
  
  h3 {
    color: #000;
    margin-bottom: 12px;
  }

  .no-margin {
    margin:0;
  }
  
  /**
    Definition container and items grid
  */
  .def-container {
    display: grid;
    align-items: center;
    justify-content: left;
    grid-gap: 24px;
    height: 99px;
  }

  .def-item1 {
    grid-column: 1;
    grid-row: 1;
    h2 {
      color: #000000;
    }
  }

  .def-item2 {
    grid-column: 2 / span 5;
    grid-row: 1;
    p {
      margin: 0;
    }
  }

  /**
  Content news div (grid)
  */
  .content-news {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 75% 25%;
  }

  .space {
    height: 26px;
  }

`

const PageLayout = ({ children, location, title, descriptionDef, description }) => {
  //const data = useStaticQuery(graphql``)

  return (
    <LayoutWrapper>
        <Layout>
          <SEO title={title} />
          <div className="section white-background">
            <div className="container">
              <div className="def-container">
                <div className="def-item1">
                  <h2>{title}</h2>
                </div>
                <div className="def-item2">
                  <p className="italic">{descriptionDef}</p>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
              <div className="content-news">
                {children}
              </div>
            </div>
          </div>
          <SocialFooter/>
        </Layout>
      </LayoutWrapper>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
