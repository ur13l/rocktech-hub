import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const ImgWrapper = styled.span`
  visibility: hidden;
  display:inline-block;
  width: 100px;
`
const ImgWrapper2 = styled.span`
  display:inline-block;
  width: 100px;
`

/**
 *
 */
const Iso = ({ location, src }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "iso.png" }) {
        childImageSharp {
          fluid(maxWidth: 70) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  if (location !== "/") {
    return (
      <ImgWrapper2>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: "70px"},{marginLeft: "auto"} ,{marginRight:"auto"}}
        imgStyle={{ objectFit: "contain" }}
      />
      </ImgWrapper2>
    )
  }
  return (
    <ImgWrapper>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: "170px"}}
        imgStyle={{ objectFit: "contain" }}
      />
    </ImgWrapper>
  )
}

export default Iso
