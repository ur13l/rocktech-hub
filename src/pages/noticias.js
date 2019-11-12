import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import MainPost from "../components/main-post"

const LayoutWrapper = styled.div`
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
    border-top: 1px #d0d0d0 solid;
    padding-top: 24px;
    grid-template-columns: 25% 25% 25% 25%;
  }

  .content-item1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    display: grid;
    grid-gap: 24px;
  }

  .content-item2 {
    background: saddlebrown;
    height: 1200px;
    grid-column: 4;
    grid-row: 1 / span 2;
    display: grid;
  }

  .content-item3 {
    background: peru;
    height: 500px;
    grid-column: 1 / span 3;
    grid-row: 2;
    display: grid;
    padding: 24px;
    grid-gap: 24px;
  }

  /**
    Main Section
   */
  .main1  {
    grid-column: 1 / span 3;
    grid-row: 1;

  }

  .main-common-item {
    grid-row: 2;
    height: auto;
    background: rebeccapurple;
  }
`

class Noticias extends Component {
  render() {
    var mainPosts = this.props.data.mainPosts.edges

    /**
     * We iterate in reverse because that is how we assure the most recent
     * posts with the sticky property will be appearing first.
     */
    for (var i = mainPosts.length - 1; i >= 0; i--) {
      if (mainPosts[i].node.sticky === true) {
        mainPosts.splice(0, 0, mainPosts.splice(i, 1)[0])
      }
    }

    return (
      <LayoutWrapper>
        <Layout>
          <SEO title="Noticias" />
          <div className="section white-background">
            <div className="container">
              <div className="def-container">
                <div className="def-item1">
                  <h2>Noticias</h2>
                </div>
                <div className="def-item2">
                  <p className="italic">Del lat. notitia.</p>
                  <p>
                    f. Información sobre algo que se considera interesante
                    divulgar.
                  </p>
                </div>
              </div>
              <div className="content-news">
                <div className="content-item1">
                  <div className="main1">
                    <MainPost post={mainPosts[0]} />
                  </div>
                  <div className="main-common-item main2"></div>
                  <div className="main-common-item main3"></div>
                  <div className="main-common-item main4"></div>
                </div>
                <div className="content-item2"></div>
                <div className="content-item3"></div>
              </div>
            </div>
          </div>
        </Layout>
      </LayoutWrapper>
    )
  }
}

export default Noticias

Noticias.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export const postsQuery = graphql`
  query {
    mainPosts: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
    ) {
      edges {
        node {
          id
          title
          sticky
          excerpt
          slug
          featured_media {
            id
            link
            caption
            localFile {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  }
              }
            }
          }
          tags {
            id
            name
          }
          categories {
            id
            name
          }
        }
      }
    }
  

  financePosts: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: { tags: { elemMatch: { name: { eq: "Finanzas" } } } }
    ) {
      edges {
        node {
          id
          title
          sticky
          excerpt
          slug
          featured_media {
            id
            link
            caption
          }
          tags {
            id
            name
          }
          categories {
            id
            name
          }
        }
      }
    }
    tecnologyPosts: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: { tags: { elemMatch: { name: { eq: "Tecnología" } } } }
    ) {
      edges {
        node {
          id
          title
          sticky
          excerpt
          slug
          featured_media {
            id
            link
            caption
          }
          tags {
            id
            name
          }
          categories {
            id
            name
          }
        }
      }
    }
  
  }
`
