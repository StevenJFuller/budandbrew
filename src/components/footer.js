import React from "react"
import styled from "styled-components"

const BottomBar = styled.footer`
  margin-top: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`

const Footer = ({ siteTitle }) => (
  <BottomBar>
    <Container>
      &copy; {new Date().getFullYear()} {siteTitle}
    </Container>
  </BottomBar>
)

export default Footer
