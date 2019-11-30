import React, { Component } from "react"
import { graphql } from "gatsby"
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
`

class GlosaryEntry extends Component {
  componentDidMount() {
    this.url = window.location.href
  }
  render() {
    this.post = this.props.data.wordpressPost
    this.url = this.props.data.site.siteMetadata.url
    return (
      <LayoutWrapper>
        <PageLayout
          title="Glosario"
          description="m. Catálogo de palabras de una misma disciplina que aparecen explicadas."
          descriptionDef="Del lat. glossarium."
          location={"/glosario/" + this.post.slug}
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
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: this.post.content,
              }}
            />
            <div className="post-footer">
              <div className="post-footer-item1"></div>
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

GlosaryEntry.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default GlosaryEntry

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      date
    }
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`
