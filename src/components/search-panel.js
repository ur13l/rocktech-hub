import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql, Link } from "gatsby"
import htmlToText from "html-to-text"
import TextTruncate from "react-text-truncate"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchPanelWrapper = styled.div`
  padding: 0 !important;
  margin: 0 !important;

  h3 {
    border-bottom: 1px solid #000;
  }
  #search-panel {
    top: 120px;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 2000;
    display: grid;
    overflow: scroll;
    grid-template-columns: 50% 50%;
    padding-bottom: 120px;
  }

  .search-panel1,
  .search-panel2 {
    margin: 0;
    padding: 24px 60px;
    h4 {
      margin: 0;
    }
    overflow: scroll;
  }

  .search-panel3 {
    grid-column: 1 / span 2;
    align-self: center;
    text-transform: uppercase;
    font-size: 27px;
    font-weight: 800;
  }

  .search-hidden {
    display: none;
  }

  span {
    color: #000 !important;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    #search-panel {
      grid-template-columns: 100%;
    }
    .search-panel1,
    .search-panel2 {
      margin: 0;
      padding: 24px 24px;
      h4 {
        margin: 0;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    #search-panel {
      grid-template-columns: 100%;
    }

    .search-panel1,
    .search-panel2 {
      margin: 0;
      padding: 24px 24px;
      h4 {
        margin: 0;
      }
    }
  }
`

const selectPost = () => {
  document.body.style = "overflow:inherit"
  document.documentElement.style = "overflow:scroll"
}

/**
 * SearchPanel will render the most important new located on the News Page as a headliner.
 */
const SearchPanel = ({ q }) => {
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
        filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
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
  const glosaryShown = data.glosary.edges
    .filter(
      elem =>
        elem.node.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .search(
            q
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) !== -1
    )
    .splice(0, 6)

  const newsShown = data.news.edges
    .filter(
      elem =>
        elem.node.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .search(
            q
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) !== -1
    )
    .splice(0, 6)

  return (
    <SearchPanelWrapper>
      <div id="search-panel" className="is-hidden">
        <div
          className={
            "search-panel1 " + (newsShown.length === 0 ? "search-hidden" : "")
          }
        >
          <h3>Noticias</h3>
          {newsShown.map(entry => (
            <Link
              key={entry.node.id}
              onClick={() => {
                selectPost()
              }}
              to={"/" + entry.node.slug}
            >
              <div>
                <h4>{htmlToText.fromString(entry.node.title)}</h4>
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={entry.node.excerpt
                    .replace("<p>", "")
                    .replace("</p>", "")}
                  textTruncateChild=""
                />
              </div>
            </Link>
          ))}
        </div>
        <div
          className={
            "search-panel2 " +
            (glosaryShown.length === 0 ? "search-hidden" : "")
          }
        >
          <h3>Glosario</h3>
          {glosaryShown.map(entry => (
            <Link
              key={entry.node.id}
              onClick={() => {
                selectPost()
              }}
              to={"/glosario/" + entry.node.slug}
            >
              <div>
                <h4>{htmlToText.fromString(entry.node.title)}</h4>
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={htmlToText.fromString(entry.node.excerpt)}
                  textTruncateChild=""
                />
              </div>
            </Link>
          ))}
        </div>
        <div
          className={
            "search-panel3 " +
            (newsShown.length !== 0 || glosaryShown.length !== 0
              ? "search-hidden"
              : "")
          }
        >
          <span>No se encontraron resultados</span>
        </div>
      </div>
    </SearchPanelWrapper>
  )
}

export default SearchPanel

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  q: PropTypes.string,
}
