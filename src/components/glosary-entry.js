import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class GlosaryEntry extends Component {
  render() {

    return (
      <>
        <h1>Hola</h1>
        <div></div>
      </>
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
      }
      site {
        siteMetadata {
          title
        }
      }
  }
`
