import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import MainPost from "../components/main-post"
import SmallPost from "../components/small-post"
import MediumPost from "../components/medium-post"
import SideNav from "../components/sidenav"

const LayoutWrapper = styled.div`
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
    grid-template-rows: 0fr 1fr ;
  }

  .content-item1 {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    grid-gap: 24px;
    height: fit-content;
  }

  .content-item2 {
    grid-column: 2;
    grid-row: 1 / span 2;
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

  /**
    Main Section
   */
  .main1  {
    grid-column: 1;
    grid-row: 1;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
  }

  .main2 {
    grid-column:1;
    grid-row: 2;
    grid-template-columns: 33% 33% 33%;
    display: grid;
    grid-gap: 12px;
  }

  .main-common-item1 {
    grid-column: 1;
    grid-row: 1;
  }

  .main-common-item2 {
    grid-column: 2;
    grid-row: 1;
  }

  .main-common-item3 {
    grid-column: 3;
    grid-row: 1;
  }

  /**
    Technology / Finance section
   */
  .technology-item {
    grid-column: 2;
    grid-row: 1;
    padding-right: 24px;
  }

  .finance-item {
    grid-column: 1;
    grid-row: 1;
    border-right: 1px solid #d0d0d0;
    padding-right: 24px;
  }

  .header-half-section {
    height: fit-content;
    margin-bottom: 18px;
  }

  .space {
    height: 26px;
  }

`
class Noticias extends Component {
 
  
  postLoop = (posts) => {
    let div = [];
    posts.forEach((post, key) => {
      div.push(<MediumPost post={post}/>)
    })
    return div;
  }
  
  render() {
    var mainPosts = this.props.data.mainPosts.edges
    var techPosts = this.props.data.technologyPosts.edges;
    var financePosts = this.props.data.financePosts.edges;

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
                  <div className="main2" >
                    <div className="main-common-item1">
                      <SmallPost post={mainPosts[1]}/> 
                    </div>
                    <div className="main-common-item2">
                      <SmallPost post={mainPosts[2]}/>
                    </div>
                    <div className="main-common-item3">
                      <SmallPost post={mainPosts[3]}/>
                    </div>
                  </div>
                </div>
                <div className="content-item2">
                  <SideNav/>
                </div>
                <div className="content-item3">
                  <div className="finance-item">
                    <div className="header-half-section">
                      <h3>Finanzas</h3>
                      <p className="italic no-margin space"></p>
                      <p className="no-margin">f. Conjunto de actividades que tienen relación con el dinero y actividades dentro del sector económico.</p>
                    </div>
                    {this.postLoop(financePosts)}

                  </div>
                  <div className="technology-item">
                    <div className="header-half-section">
                      <h3>Tecnología</h3>
                      <p className="italic no-margin">(Del gr. Τεχνολογία)</p>
                      <p className="no-margin">f. Conjunto de actividades que tienen relación con el dinero y actividades dentro del sector económico.</p>
                    </div>
                    {this.postLoop(techPosts)}

                  </div>
                </div>
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
          content
          sticky
          excerpt
          slug
          date
          author {
            id
            name
          }
          featured_media {
            id
            link
            caption
            localFile {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fixed(width: 120, height: 120) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 468, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }

                grayFixed:  fixed(width: 120, height: 120,
                  duotone: { highlight: "#ffffff", shadow: "#000000", opacity: 100 }) {
                  ...GatsbyImageSharpFixed
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
            localFile {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fixed(width: 468, height: 263) {
                  ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth: 468, maxHeight: 263) {
                    ...GatsbyImageSharpFluid
                    }

                    grayFluid: fluid(maxWidth: 468, maxHeight: 200,
                      duotone: { highlight: "#ffffff", shadow: "#000000", opacity: 100 }) {
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
    technologyPosts: allWordpressPost(
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
            localFile {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fixed(width: 468, height: 263) {
                  ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth: 468, maxHeight: 263) {
                    ...GatsbyImageSharpFluid
                    }

                    grayFluid: fluid(maxWidth: 468, maxHeight: 200,
                      duotone: { highlight: "#ffffff", shadow: "#000000", opacity: 100 }) {
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
  
  }
`
