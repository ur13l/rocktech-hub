import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Img from "gatsby-image"
import TextTruncate from "react-text-truncate"

/**
 * PostWrapper element, used to set style to a component.
 */
const PostWrapper = styled.div`
    height: 430px;
    .small-text {
        font-size: 12px;
        line-height: normal;
    }

    h5 {
      margin-top: 24px;
      margin-bottom: 24px;
      color: #000;
    }

    a {
      color: #000;
    }

    .medium-title{
      margin: 9px 0;
    }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 768px) {
    height: fit-content;
    margin: 27px 0;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: fit-content;
    margin: 27px 0;
  }
`

/**
 * Medium Post component
 * @param {Object} post
 */
const MediumPost = ({ post }) => 
  {
    return (
      <PostWrapper>
        <Link to={"/" + post.node.slug}>
          <div className="medium-image-container">
            <Img fluid={post.node.featured_media.localFile.childImageSharp.grayFluid} />
          </div>  
        </Link>
        <Link to={"/" + post.node.slug}>
          <h5 className="medium-title" dangerouslySetInnerHTML={{ __html: post.node.title}}/>
          <TextTruncate
                  line={4}
                  element="span"
                  truncateText="…"
                  className="no-margin"
                  text={post.node.excerpt.replace("<p>", "").replace("</p>", "")}
                  textTruncateChild=""
              />
        </Link>
      </PostWrapper>
    )
  }


MediumPost.propTypes = {
  siteTitle: PropTypes.string,
}

MediumPost.defaultProps = {
  siteTitle: ``,
}

export default MediumPost