import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Img from "gatsby-image"
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
  width: 100%;
  grid-template-columns: 50% 50%;

  /** Remove the blue color from default anchor tags */
  a {
    color: #000000;
  }

  /** General main elements styled */
  .mp-item1 {
    grid-column: 1;
    grid-row: 1;
  }

  .mp-item2 {
    grid-column: 2;
    grid-row: 1;
    padding-right: 24px;
  }

  /** Footer section */
  .post-footer  {
    padding-top: 18px;
    display: grid;
    color: #aaa;
    font-size: 15px;
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
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
   .mp-item2{
     padding-right:0;
   }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 100%;
    .mp-item2{
      padding-right:0;
    }
  }
`

/**
 * MainPost will render the most important new located on the News Page as a headliner.
 * @param {Object} post
 */
const MainPost = ({ post }) => {
  return (
    <PostWrapper>
      {/* Pointing to the detail page by Gatsby from the slug in Wordpress. */}
      <Link to={"/" + post.node.slug}>
        <div className="mp-item1 hide-on-med-and-down">
          <Img
            fluid={post.node.featured_media.localFile.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            style={{ maxWidth: "900px" }}
          />
        </div>
      </Link>
      <Link to={"/" + post.node.slug}>
        <div className="mp-item2">
          {/* dangerouslySetInnerHTML means that the content will render in HTML */}
          <h1
            dangerouslySetInnerHTML={{
              __html: post.node.title,
            }}
          ></h1>
          <div className="mp-item1 hide-on-large-and-up">
            <Img
              fluid={post.node.featured_media.localFile.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
              style={{ maxWidth: "900px" }}
            />
          </div>
          {/* The replace method on the text attribute helps to remove the paragraph tag 
          that comes with the excerpt */}
          <TextTruncate
            line={4}
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
MainPost.propTypes = {
  post: PropTypes.object,
}

MainPost.defaultProps = {
  post: {},
}

export default MainPost
