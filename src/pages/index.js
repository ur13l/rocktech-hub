import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import BusinessUnit from "../components/business-unit"

const LayoutWrapper = styled.div`
  background-color: #171717;
  min-height:99%;
  color: white;

  .rocktech-def {
    padding-top:6vh;
    margin-bottom: 12vh;
  }

`


const IndexPage = () => (
  <LayoutWrapper>
    <Layout location="/">
      <SEO title="Rocktech Hub" />
      <div class="rocktech-def">
          <h3>¿Qué es Rocktech?</h3>
          <p class="def">
            Rocktech es una empresa de tecnología financiera que fomenta la inversión en innovación y analítica de mercados, con el propósito de incrementar el valor a cada negocio.
          </p>
      </div>
      <div class="units">
        <h3>Unidades de negocio</h3>
        <BusinessUnit/>
      </div>
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
