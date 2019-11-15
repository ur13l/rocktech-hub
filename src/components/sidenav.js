import { Link, StaticQuery, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import Img from "gatsby-image"
import DOMPurify from "dompurify"
import TextTruncate from "react-text-truncate"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import htmlToText from "html-to-text"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed"

const formatter = buildFormatter(esStrings)
/**
 * SideNavWrapper element, used to set style to a component.
 */
const SideNavWrapper = styled.div`
  padding: 24px;

  h3,
  h5,
  a {
    color: #000;
  }

  .sidenav-section {
    padding-bottom: 42px;
  }
`

/**
 * SideNav will render the most important new located on the News Page as a headliner.
 */
const SideNav = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(
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
      let rn = Math.floor(Math.random() * (length - 0))

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

  console.log(data)
  let glosary = data.allWordpressPost.edges
  /**
   * For the word of the day we select a random item from pages in the glosary
   * This word will be different for each user.
   */
  let randomNumber = getRandomNumberOfDay(glosary.length)
  let wordOfTheDay = glosary[randomNumber]

  return (
    <SideNavWrapper>
      <div className="word-of-the-day sidenav-section">
        <h3>Palabra del día</h3>
        <h5
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(wordOfTheDay.node.title + ":"),
          }}
        />
        <TextTruncate
          line={4}
          element="span"
          truncateText="…"
          text={htmlToText.fromString(wordOfTheDay.node.content)}
          textTruncateChild={
            <a href={"/glosario/" + wordOfTheDay.node.slug}>Ver más</a>
          }
        />
      </div>
      <div className="last-minute sidenav-section">
        <h3>Último minuto</h3>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rocktechmx"
          options={{ height: 600 }}
        />
      </div>
    </SideNavWrapper>
  )
}

/**
 * Default props for the SideNav Component
 */
SideNav.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SideNav
