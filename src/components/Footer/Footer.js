import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './style.css'

const Footer = () => {
  return (
<div className="footer__container social__media">
    <div className="social__media--wrap">
        <p className="website__right"> © Gregory Tanaka 2021.</p>
        <div className="social__icons">
            <a href="https://github.com/TheGregTanaka" className="social__icon--link" target="_blank">
                <GitHubIcon fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/in/thegregtanaka/" className="social__icon--link" target="_blank">
                <LinkedInIcon fontSize="large"/>
            </a>
        </div>
    </div>
</div>
  )
}

export default Footer
