import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Img from "gatsby-image"
import DOMPurify from "dompurify"
import TextTruncate from "react-text-truncate"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"

const formatter = buildFormatter(esStrings)
/**
 * PostWrapper element, used to set style to a component.
 */
const PostWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  align-items: top;
  justify-content: left;
  margin-top: 24px;
  margin-bottom: 24px;
  grid-template-columns: 30% 70%;

  /** Remove the blue color from default anchor tags */
  a {
    color: #000000;
  }

  /** General main elements styled */
  .lp-item1 {
    grid-column: 1;
    grid-row: 1;
  }

  .lp-item2 {
    grid-column: 2;
    grid-row: 1;
    padding-right: 24px;
  }

  /** Footer section */
  .post-footer  {
    padding-top: 18px;
    display: grid;
    color: #707070;
    font-style: italic;
  }

  .post-date {
    justify-self: left;
    grid-column: 1;
    grid-row: 1;
  }

  .post-author  {
    justify-self: right;
    grid-column: 2;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 992px) {
    grid-template-columns: 100%;
    margin: 33px 0;
    .lp-item2{
      padding-right: 0;
    }
  }
`

/**
 * LinePost will render the most important new located on the News Page as a headliner.
 * @param {Object} post
 */
const LinePost = ({ post }) => {
  return (
    <PostWrapper>
      {/* Pointing to the detail page by Gatsby from the slug in Wordpress. */}
      <Link to={"/" + post.node.slug}>
        <div className="lp-item1">
          <Img
            fluid={post.node.featured_media.localFile.childImageSharp.grayFluid}
          />
        </div>
      </Link>
      <Link to={"/" + post.node.slug}>
        <div className="lp-item2">
          {/* dangerouslySetInnerHTML means that the content will render in HTML */}
          <h3
            dangerouslySetInnerHTML={{
              __html: post.node.title,
            }}
          ></h3>

          {/* The replace method on the text attribute helps to remove the paragraph tag 
          that comes with the excerpt */}
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={post.node.excerpt.replace("<p>", "").replace("</p>", "")}
            textTruncateChild=""
          />

          {/* The date is formatted in the POV format from today */}
          <div className="post-footer">
            <TimeAgo
              className="post-date"
              formatter={formatter}
              date={post.node.date}
            />
            <span className="post-author"> Por: {post.node.author.name}</span>
          </div>
        </div>
      </Link>
    </PostWrapper>
  )
}

/**
 * Default props for Main Post
 */
LinePost.propTypes = {
  post: PropTypes.object,
}

LinePost.defaultProps = {
  post: {},
}

export default LinePost
