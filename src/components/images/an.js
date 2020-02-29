import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

/**
 *
 */
const AnalyticsImage = () => {
  const data = useStaticQuery(graphql`
    query {
      webImage: file(relativePath: { eq: "analytics.png" }) {
        childImageSharp {
          fluid(maxWidth: 850) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mobileImage: file(relativePath: { eq: "analytics-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 850) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.webImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Img
      fluid={sources}
      style={{ maxWidth: "850px" }}
      imgStyle={{ objectFit: "contain" }}
    />
  )
}

export default AnalyticsImage
