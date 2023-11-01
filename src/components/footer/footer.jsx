import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import CompanyLogo from '../../assets/images/svg/logo.svg'
import Social from '../social/social'

const Footer = () => {
  return (
    <footer className="footer__section--bar">
      <div className="container">
        <div className="footer__section--inner">
          <div className="footer__section--left">
            <Router>
              <Link to="/">
                <img src={ CompanyLogo } alt="footer-logo" />
              </Link>
            </Router>
          </div>
          <div className="footer__section--right">
            <ul>
              <li>
                <Router>
                  <Link to="/">Token</Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/">Whitepaper</Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="https://demo.fraction.estate/" target="_blank">NFT Marketplace</Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/">Buy FET Token</Link>
                </Router>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__section--bottom">
          <p>Fraction.Estate tokenizes real world properties into NFTs and fractionalize them making real estate ownership easily accessible.</p>
          <Social />
        </div>
        <div className="footer__section--strip">
          <p>© 2022 fraction.estate All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
