import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SideNav from "../components/sidenav"
import PageLayout from "../components/page-layout"
import Paginator from "../components/paginator"
import styled from "styled-components"
import MainPost from "./main-post"
import LinePost from "./line-post"
import SmallPost from "./small-post"

const LayoutWrapper = styled.div`
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
    padding-top: 24px;
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
    grid-row: 1;
    display: grid;
    border-left: 1px solid #d0d0d0;
  }


  .main1  {
    grid-column: 1;
    grid-row: 1;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
  }

  /**
   * Other post section
   */
  .other-posts {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 12px;
    border-top: 1px solid #d0d0d0;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

class Category extends Component {
  render() {
    const category = this.props.data.wordpressTag
    const posts = this.props.data.allWordpressPost.edges
    const other = this.props.data.other.edges
    const numPages = this.props.pageContext.numPages
    const currentPage = this.props.pageContext.currentPage
    let postsElems = []
    let otherElems = []

    console.log(this.props)

    /**
     * If there's no elements we show a legend informing the user about that.
     * In case there is at least one post, the first will be presented as a main post.
     * In case there is more than one posts, those will be added as Line Posts
     */
    if (posts.length === 0) {
      postsElems.push(<p>No hay noticias registradas para esta categoría</p>)
    }

    if (posts.length > 0) {
      postsElems.push(
        <div className="main1">
          <MainPost post={posts[0]} />
        </div>
      )
    }

    if (posts.length > 1) {
      posts.forEach((post, i) => {
        if (i > 0) postsElems.push(<LinePost post={post} />)
      })
    }

    if (other.length > 0) {
      other.forEach(post => {
        otherElems.push(<SmallPost post={post} />)
      })
    }

    return (
      <LayoutWrapper>
        <PageLayout title={category.name} description={category.description}>
          <div className="content-item1">
            <div>{postsElems}</div>
            <div className="other-posts">{otherElems}</div>
            <Paginator
              numPages={numPages}
              currentPage={currentPage}
              baseRoute={"/categoria/" + category.slug + "/"}
            />
          </div>
          <div className="content-item2">
            <SideNav/>
          </div>
        </PageLayout>
      </LayoutWrapper>
    )
  }
}

Category.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Category

export const postQuery = graphql`
  # $skip and $limit will be used for pagination
  query($id: String!, $skip: Int!, $limit: Int!) {
    wordpressTag(id: { eq: $id }) {
      id
      name
      description
      slug
    }

    other: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: {
        categories: { elemMatch: { name: { eq: "blog" } } }, 
        tags: { elemMatch: { id: { nin: [$id] } } }
      }
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
                grayFixed: fixed(
                  width: 120
                  height: 120
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                ) {
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

    # Getting all wordpress posts from a category
    allWordpressPost(
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          title
          sticky
          excerpt
          date
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
                fluid(maxWidth: 290, maxHeight: 230) {
                  ...GatsbyImageSharpFluid
                }

                grayFluid: fluid(
                  maxWidth: 200
                  maxHeight: 110
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                ) {
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
          author {
            id
            name
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
