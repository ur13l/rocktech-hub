import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import PageLayout from "./page-layout"
import htmlToText from "html-to-text"
import SideNav from "./sidenav"
import Moment from "react-moment"
import "moment/locale/es"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa"

const LayoutWrapper = styled.div`
  .post-footer {
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: center;
    * {
      align-self: center;
    }
  }

  .post-footer-item1 {
    justify-self: left;
  }

  .post-footer-item2 {
    justify-self: end;
    display: flex;
    align-content: center;
    * {
      align-self: center;
    }
  }
  .social {
    font-size: 30px;
    padding: 12px;
  }

  img {
    max-width: 315px;
  }

  a {
    color: inherit;
  }

  .content-html {
    max-width: 85vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 992px) {
    .post-footer {
      grid-template-columns: 100%;
      justify-content: center;
    }

    .post-footer-item1 {
      justify-self: center;
    }

    .post-footer-item2 {
      justify-self: center;
    }
  }
`

class Post extends Component {

  componentDidMount() {
    this.url = window.location.href
  }
  
  render() {
    this.post = this.props.data.wordpressPost
    this.url = this.props.data.site.siteMetadata.url

    return (
      <LayoutWrapper>
        <PageLayout
          title={this.post.tags[0].name}
          description={this.post.tags[0].description}
          location={this.post.slug}
          pageTitle={htmlToText.fromString(this.post.title)}
        >
          <div className="content-item1">
            <div className="title-container">
              <h1>{htmlToText.fromString(this.post.title)}</h1>
              <p className="no-margin accent-text-color">
                <Moment format="LL" locale="es">
                  {this.post.date}
                </Moment>
              </p>
              <p className="no-margin accent-text-color">
                Por: {this.post.author.name}
              </p>
            </div>
            <div
            className="content-html"
              dangerouslySetInnerHTML={{
                __html: this.post.content,
              }}
            />
            <div className="post-footer">
              <div className="post-footer-item1">
                Tags:
                {this.post.tags.map((tag, i) => (
                  <Link key={this.post.id} to={"/categoria/" + tag.slug}>
                  <span>
                    {" " +
                      tag.name +
                      (this.post.tags.length - 1 === i ? " " : ", ")}
                  </span>
                  </Link>
                ))}
              </div>
              <div className="post-footer-item2">
                <span className="">Compártelo:</span>
                <span className="social">
                  <FacebookShareButton
                    url={this.url}
                    quote={this.post.title}
                    className="social-button facebook"
                  >
                    <FaFacebookF />
                  </FacebookShareButton>
                </span>
                <span className="social">
                  <TwitterShareButton
                    url={this.url}
                    title={this.post.title}
                    className="social-button twitter"
                  >
                    <FaTwitter />
                  </TwitterShareButton>
                </span>
                <span className="social">
                  <LinkedinShareButton
                    url={this.url}
                    title={this.post.title}
                    className="social-button twitter"
                  >
                    <FaLinkedin />
                  </LinkedinShareButton>
                </span>
              </div>
            </div>
          </div>
          <div className="content-item2">
            <SideNav />
          </div>
          <div className="content-item3"></div>
        </PageLayout>
      </LayoutWrapper>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      slug
      date
      tags {
        id
        name
        description
        slug
      }

      author {
        name
      }
    }
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`
