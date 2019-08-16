import React from "react"
import styled from "styled-components"

const Form = styled.form`
  margin: 0 auto;
  max-width: 460px;
  background: #f3f3f3;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  display: grid;
  grid-template-rows: repeat(4);
  grid-gap: 0.75rem;
  box-shadow: 2px 2px 4px 0px rgba(20, 20, 20, 0.5),
    6px 6px 15px 0px rgba(20, 20, 20, 0.4);
`

const EmailInput = styled.input`
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  &:focus {
    border: none;
  }
  text-align: center;
  margin: 0 auto;
  width: 100%;
`

const SubmitButton = styled.input`
  margin-top: 0.75rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  background: #333;
  color: white;
  cursor: pointer;
  &:hover {
    background: #4f4f4f;
  }
  width: 100%;
`

const HiddenInput = styled.div`
  position: absolute;
  left: -5000px;
`

const SignUpForm = () => (
  <div id="mc_embed_signup">
    <Form
      action="https://gmail.us3.list-manage.com/subscribe/post?u=646cc6f47dc151a09fc19189f&amp;id=8e7ec5661c"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <EmailInput
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
            placeholder="your@email.com"
          />
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>
        <HiddenInput aria-hidden="true">
          <input
            type="text"
            name="b_646cc6f47dc151a09fc19189f_8e7ec5661c"
            tabindex="-1"
            value=""
          />
        </HiddenInput>
        <div className="clear">
          <SubmitButton
            type="submit"
            value="Sign Up"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </div>
      </div>
    </Form>
  </div>
)

export default SignUpForm
