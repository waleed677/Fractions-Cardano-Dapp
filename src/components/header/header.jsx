import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CompanyLogo from '../../assets/images/svg/logo.svg'

const Header = () => {
  return (
    <header className="header__main--bar">
      <div className="container">
        <div className="header__main--inner">
          <div className="header__main--left">
            <Router>
              <Link to="/">
                <img src={ CompanyLogo } alt="header-logo" />
              </Link>
            </Router>
          </div>
          <div className="header__main--right">
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
                  <Nav.Link href="https://demo.fraction.estate/" target="_blank">NFT Marketplace</Nav.Link>
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
      </div>
    </header>
  )
}

export default Header