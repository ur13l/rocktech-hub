import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import DOMPurify from "dompurify"
import TextTruncate from "react-text-truncate"
import htmlToText from "html-to-text"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { graphql } from "gatsby"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchPanelWrapper = styled.div`
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
const SearchPanel = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const glosary = data.glosary.edges
  const news = data.news.edges

  return (
    <SearchPanelWrapper>
      <div id="search-panel" className="is-hidden"><h1>Hello</h1></div>
    </SearchPanelWrapper>
  )
}

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SearchPanel
