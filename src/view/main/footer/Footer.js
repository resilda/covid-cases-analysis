import React from 'react'
import { FooterContainer } from './styles/FooterContainer'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
  return (
    <FooterContainer>
      <div className="wrapper">
        <div className="footer-info">
          <AlternateEmailIcon className="footer-icon" />
          zandaka1@yahoo.com
        </div>
        <div className="footer-info">
          <GitHubIcon className="footer-icon github" />
          <a
            href="https://github.com/resilda/covid-cases-analysis"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            github.com/covid-cases-analysis{' '}
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
