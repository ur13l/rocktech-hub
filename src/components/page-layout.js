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
    margin: 0;
  }

  /**
    Definition container and items grid
  */
  .def-container {
    display: grid;
    align-items: center;
    justify-content: left;
    grid-gap: 24px;
    min-height: 99px;
    grid-template-columns: auto auto;
    width: 100%;
  }

  .def-item1 {
    grid-column: 1;
    grid-row: 1;
    h2 {
      color: #000000;
    }
  }

  .def-item2 {
    grid-column: 2 ;
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
    grid-template-rows: auto auto;
  }

  .space {
    height: 26px;
  }

  .content-item1 {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    grid-gap: 24px;
    height: fit-content;
    border-top: 1px solid #d0d0d0;
    padding-top: 27px;

  }

  .content-item2 {
    grid-column: 2;
    grid-row: 1 / span 3;
    display: grid;
    border-left: 1px solid #d0d0d0;
  }

  .content-item3 {
    padding-top: 24px;
    grid-column: 1;
    grid-row: 2;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 50% 50%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    .content-news {
      grid-template-columns: 1fr;
      content: object-fit;
    }

    .content-news *{
      max-width: 100%;
    }
    .content-item2 {
      display: none;
    }

    .def-container {
      grid-template-columns: 100%;
    }

    .def-item1 {
      grid-column: 1;
      grid-row: 1;
      margin-top: 30px;
      justify-content: center;
      text-align:center;
    }

    .def-item2 {
      grid-column: 1;
      grid-row: 2;
    }
    .content-item3 {
      grid-template-columns: 100%;
    }
    
    .def-item2 {
      padding-bottom: 27px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .content-news {
      grid-template-columns: 100%;
    }

    .content-item2 {
      display: none;
    }
    .def-container {
      grid-template-columns: 100%;
    }
    .def-item1 {
      grid-column: 1;
      grid-row: 1;
      margin-top: 30px;
      justify-content: center;
    }

    .def-item2 {
      grid-column: 1;
      grid-row: 2;
      padding-bottom: 27px;
    }
    .content-item3 {
      grid-template-columns: 100%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`

const PageLayout = ({
  children,
  location,
  title,
  descriptionDef,
  description,
  pageTitle,
  titleSEO,
  descriptionSEO,
  image
}) => {
  //const data = useStaticQuery(graphql``)

  return (
    <LayoutWrapper>
      <Layout location={location}>
        <SEO title={pageTitle || title} description={descriptionSEO} image={image}/>
        <div className="section white-background">
          <div className="container">
            <div className="def-container">
              <div className="def-item1">
                <h2>{title}</h2>
              </div>
              <div className="def-item2">
                <p className="italic">{descriptionDef}</p>
                <p>{description}</p>
              </div>
            </div>
            <div className="content-news">{children}</div>
          </div>
        </div>
        <SocialFooter />
      </Layout>
    </LayoutWrapper>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
