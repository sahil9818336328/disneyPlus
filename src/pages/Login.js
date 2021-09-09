import React from 'react'
import cta_1 from '../assets/images/cta-logo-one.svg'
import cta_2 from '../assets/images/cta-logo-two.png'
import background from '../assets/images/login-background.jpg'
import styled from 'styled-components'

const Login = () => {
  return (
    <Wrapper>
      <CTA>
        <CTALogoOne src={cta_1} alt='cta-logo' />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src={cta_2} alt='cta-logo' />
      </CTA>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${background});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  cursor: pointer;
  font-weight: 500;
  color: #f9f9f9;
  text-align: center;
  background-color: #0063e5;
  margin-bottom: 1rem;
  width: 100%;
  letter-spacing: var(--spacing);
  font-size: 18px;
  padding: 16.5px 0;
  transition: var(--transition);
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 1rem;
  line-height: 1.5;
  letter-spacing: var(--spacing);
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`
export default Login
