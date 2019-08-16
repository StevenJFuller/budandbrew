import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TopBar = styled.header`
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`

const SiteTitle = styled.h1`
  margin: 0;
`

const SiteTitleLink = styled(Link)`
  color: #333;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <TopBar>
    <Container>
      <SiteTitle>
        <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
      </SiteTitle>
    </Container>
  </TopBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
