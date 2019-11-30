import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import DOMPurify from "dompurify"
import TextTruncate from "react-text-truncate"
import htmlToText from "html-to-text"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { graphql } from 'gatsby'

/**
 * SideNavWrapper element, used to set style to a component.
 */
const SideNavWrapper = styled.div`
  padding: 24px;

  h3,
  h5 {
    color: #000 !important;
  }

  a {
    color: #000;
  }

  .sidenav-section {
    padding-top: 42px;
    padding-bottom: 42px;
  }

  .word-of-the-day {
    padding-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /**
  * Highlight section styles.
  */
  .highlight-item  {
    list-style: none;
    margin-bottom: 24px;
  }

  .highlight-title,
  .wotd-title  {
    line-height: 24px;
    margin-top: 39px;
    margin-bottom: 12px;
  }

  .sidenav-section {
    border-bottom: 1px solid #d0d0d0;
  }

  .categories-container {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 42px;
    grid-gap: 12px 24px;
  }
`

/**
 * SideNav will render the most important new located on the News Page as a headliner.
 */
const SideNav = () => {
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
      highlights: allWordpressPost(
        sort: { fields: [date], order: DESC }
        filter: {
          categories: { elemMatch: { name: { eq: "blog" } } }
          sticky: { eq: true }
        }
        limit: 2
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

      categories: allWordpressTag(
        sort: { fields: [count], order: [DESC] }
        limit: 100
      ) {
        edges {
          node {
            id
            name
            count
            slug
            description
          }
        }
      }
    }
  `)

  /**
   * Method to get a random word of the day. Each day we get a different one
   */
  const getRandomNumberOfDay = length => {
    /** Getting the current date */
    let currentDate = new Date()

    /**
     * The new number is generated if one of the following conditions is met.
     * If there's no random number in localStorage.
     * If there's no expiry date set.
     * If the current date is after the last expiry date.
     */
    if (
      localStorage.randomNumber == null ||
      localStorage.expiryDate == null ||
      currentDate.getTime() > localStorage.expiryDate
    ) {
      let rn = Math.floor(Math.random() * (length - 1))

      /**
       * Setting the expiry date as next day at 0:00
       */
      let expiryDate = new Date()
      expiryDate.setDate(currentDate.getDate() + 1)
      expiryDate.setHours(0)
      expiryDate.setMinutes(0)
      expiryDate.setSeconds(0)
      localStorage.randomNumber = rn
      localStorage.expiryDate = expiryDate.getTime()
      return rn
    }

    return localStorage.randomNumber
  }

  const glosary = data.glosary.edges
  const highlights = data.highlights.edges
  const categories = data.categories.edges
  /**
   * For the word of the day we select a random item from pages in the glosary
   * This word will be different for each user.
   */
  let randomNumber = getRandomNumberOfDay(glosary.length)
  console.log(randomNumber);
  let wordOfTheDay = glosary[randomNumber]

  let highlightsElem = []
  highlights.forEach(post => {
    highlightsElem.push(
      <li key={post.node.id} className="highlight-item">
        <Link to={post.node.slug}>
          <h5
            className="highlight-title"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.node.title),
            }}
          />
        </Link>
        <TextTruncate
          className="highlight-content"
          line={3}
          element="span"
          truncateText=""
          text={post.node.excerpt.replace("<p>", "").replace("</p>", "")}
          textTruncateChild={
            <a className="truncate-text" href={"/" + post.node.slug}>
              Ver más...
            </a>
          }
        />
      </li>
    )
  })

  let categoriesElem = []
  categories.forEach(category => {
    categoriesElem.push(
      <Link key={category.node.id} to={"/categoria/" + category.node.slug}>{category.node.name}</Link>
    )
  })

  return (
    <SideNavWrapper>
      <div className="word-of-the-day sidenav-section">
        <h4>Palabra del día</h4>
        <h5
          className="wotd-title"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(wordOfTheDay.node.title + ":"),
          }}
        />
        <TextTruncate
          line={4}
          element="span"
          truncateText=""
          text={htmlToText.fromString(wordOfTheDay.node.content)}
          textTruncateChild={
            <a
              className="truncate-text"
              href={"/glosario/" + wordOfTheDay.node.slug}
            >
              Ver más...
            </a>
          }
        />
      </div>
      <div className="last-minute sidenav-section">
        <h4>Último minuto</h4>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rocktechmx"
          options={{ height: 600 }}
        />
      </div>
      <div className="highlights sidenav-section">
        <h4>Destacadas</h4>
        <ul>{highlightsElem}</ul>
      </div>
      <div className="highlights sidenav-section">
        <h4>Categorías</h4>
        <div className="categories-container">{categoriesElem}</div>
      </div>
    </SideNavWrapper>
  )
}

/**
 * Default props for the SideNav Component
 */
SideNav.propTypes = {
  
}

export default SideNav
