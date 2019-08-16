import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Popup = styled.div`
  max-width: 400px;
  background: palevioletred;
  padding: 1.75rem 1.25rem;
`

const ExitButton = styled.span`
  text-align: right;
`

const SignUpNotification = () => (
  <Container>
    <Popup>
      <ExitButton>&times;</ExitButton>
      <p>
        Thanks for signing up! We'll let you know when this service becomes
        available in your region.
      </p>
    </Popup>
  </Container>
)

export default SignUpNotification
