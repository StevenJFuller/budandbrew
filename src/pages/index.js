import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SignUpForm from "../components/signupform"
import SEO from "../components/seo"

const Tagline = styled.p`
  color: rgba(0, 0, 0, 0.8);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Get the best of both worlds.</h2>
    <Tagline>
      Canada's premier cannabis and craft beer experience. Fresh cannabis and
      craft beer delivered to your door monthly.
    </Tagline>
    <SignUpForm />
  </Layout>
)

export default IndexPage
