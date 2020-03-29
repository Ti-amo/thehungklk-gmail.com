import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <FooterMain className="footer-main">
      <FooterText className="footer_text">
        Liên hệ Email: &nbsp; <i className="fas fa-mail-bulk" /> &nbsp;
        <a rel="noopener noreferrer" href="mailto:jobufea@gmail.com" target="_blank">
          jobufea@gmail.com
        </a>{' '}
        &nbsp; - Hoặc &nbsp;
        <a rel="noopener noreferrer" href="https://www.facebook.com/qngdt" target="_blank">
          qngdt
        </a>{' '}
        &nbsp; || &nbsp;
        <a rel="noopener noreferrer" href="https://www.facebook.com/thehung.phung.712" target="_blank">
          anhsocdeptrai
        </a>
      </FooterText>
    </FooterMain>
  )
}

export default Footer

const FooterMain = styled.footer`
  text-align: center;
  width: 100%;
  height: 40px; /* Height of the footer */
  color: white;
  background: linear-gradient(to right, #fc625a, #fc625a);
`

const FooterText = styled.div`
  padding-top: 0.34rem;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
  }
  a {
      text-decoration: none;
    color: white;
    font-weight: 600;

    &:hover {
      color: #3273dc;
    }
  }
`
