import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from "./images/logo.js"
import Img from "gatsby-image"
import { FaSearch } from "react-icons/fa"

/**
 * PostWrapper element, used to set style to a component.
 */
const PostWrapper = styled.div`
    display: grid;
    grid-gap: 24px;
    align-items: center;
    justify-content: left;
    height: 100%;
    grid-template-columns: minmax(20%, 33%) minmax(20%, 33%) minmax(33%, 60%);
    
    .mp-item1 {
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .mp-item2 {
        grid-column: 3;
        grid-row: 1;
    }

    Link {

    }
`

/**
 * Header component
 * @param {Object} post
 */

const MainPost = ({ post }) => 
  {
      console.log(post);
    return (
      <PostWrapper>
      
        <div className="mp-item1">
        <Link to={"/" + post.node.slug}>
            <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} />
        </Link>
        </div>
        <div className="mp-item2">
            <h1 dangerouslySetInnerHTML={{ __html: post.node.title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></p>
        </div>
        
      </PostWrapper>
    )
  }


MainPost.propTypes = {
  siteTitle: PropTypes.string,
}

MainPost.defaultProps = {
  siteTitle: ``,
}

export default MainPost