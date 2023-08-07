import React from 'react'
import { TwitterIcon, DiscordIcon, TelegramIcon, InstagramIcon } from '../icons/icons'
import './social.scss'

const Social = () => {
  return (
    <div className="social__icon--main">
      <ul>
        <li>
          <a href="#!">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="#!">
            <DiscordIcon />
          </a>
        </li>
        <li>
          <a href="#!">
            <TelegramIcon />
          </a>
        </li>
        <li>
          <a href="#!">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
