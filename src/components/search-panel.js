import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql } from "gatsby"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchPanelWrapper = styled.div`
  padding:0 !important;
  margin:0 !important;
  div {
    top: 120px;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 2000;
  }
`

/**
 * SearchPanel will render the most important new located on the News Page as a headliner.
 */

 class SearchPanel extends Component {
  
  //const glosary = data.glosary.edges
  //const news = data.news.edges
  
  render() {
  return (
    <SearchPanelWrapper>
      <div id="search-panel" className="is-hidden"><h1>{this.props.q}</h1></div>
    </SearchPanelWrapper>
  )}
}

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
  q: PropTypes.string
}

export default SearchPanel


const query = graphql`
    query {
      glosary: allWordpressPost(
        sort: { fields: [date], order: DESC }
        filter: { categories: { elemMatch: { name: { eq: "glosario" } } } }
      ) {
        edges {
          node {
            id
            title
            content
            excerpt
            slug
            date
            categories {
              id
              name
            }
          }
        }
      }

      news: allWordpressPost(
        sort: { fields: [date], order: DESC }
        filter: {
          categories: { elemMatch: { name: { eq: "blog" } } }
          sticky: { eq: true }
        }
      ) {
        edges {
          node {
            id
            title
            content
            excerpt
            slug
            date
            sticky
            categories {
              id
              name
            }
          }
        }
      }
    }
  `

