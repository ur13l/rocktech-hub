import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Img from "gatsby-image"
import DOMPurify from "dompurify"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"

/**
 * The buildFormatter is used to change the language of the TimeAgo component
 */
const formatter = buildFormatter(esStrings)

/**
 * PostWrapper element, used to set style to a component.
 */
const PostWrapper = styled.div`
  align-items: top;
  justify-content: left;
  height: fit-content;
  display: grid;
  grid-gap: 6px;

  .sp-item1 {
    grid-column: 1;
  }

  .sp-item2 {
    grid-column: 2;
    display: grid;
    grid-template-rows: 50% 50%;
  }

  h5 {
    color: #000;
  }

  .small-text {
    font-size: 12px;
    line-height: normal;
    max-lines: 2;
  }

  .post-header {
    grid-column: 1;
    grid-row: 1;
  }

  .post-footer {
    grid-column: 1;
    grid-row: 2;
    color: #707070;
    font-style: italic;
    font-size: 16px;
    align-self: end;
    align-content: end;

    line-height: normal;

    p,
    div,
    span {
      margin: 0;
      display: inline-block;
      line-height: 0%;
    }
  }
`

/**
 * Header component
 * @param {Object} post
 */

const SmallPost = ({ post }) => {
  return (
    <PostWrapper>
      <div className="sp-item1">
        <Link to={"/" + post.node.slug}>
          <Img
            fixed={post.node.featured_media.localFile.childImageSharp.grayFixed}
          />
        </Link>
      </div>
      <div className="sp-item2">
        <Link to={"/" + post.node.slug}>
          <div className="post-header">
            <h5
              dangerouslySetInnerHTML={{
                __html: post.node.title,
              }}
            />
          </div>
          <div className="post-footer">
            <TimeAgo
              formatter={formatter}
              className="post-date"
              date={post.node.date}
            />
            <br />
            <span className="post-author"> Por: {post.node.author.name}</span>
          </div>
        </Link>
      </div>
    </PostWrapper>
  )
}

SmallPost.propTypes = {
  siteTitle: PropTypes.string,
}

SmallPost.defaultProps = {
  siteTitle: ``,
}

export default SmallPost
