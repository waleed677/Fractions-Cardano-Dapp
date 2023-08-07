import React from 'react'
import ProgressBar from '../progress-bar/progress-bar'
import fetTokenDistribution from '../../assets/images/png/fet-token-distribution.png'
import SectionTitle from '../section-title/section-title'

const TokenDistribution = () => {
  return (
    <div className="token__distribution--section">
      <div className="container">
        <SectionTitle
          title={[<span className="highlight__text">FET </span>, "Token Distribution"]}
          subTitle="This how we plan to distribute all the 200 million Fraction Estate Tokens."
        />
        <div className="two__columns--grid gap__100 margin__tb--120">
          <div className="two__columns--left">
            <img src={fetTokenDistribution} alt="Fet Token Distribution" />
          </div>
          <div className="two__columns--right">
            <ProgressBar bgcolor="#5044aa" title="Presale" percentage="30%" />
            <ProgressBar bgcolor="#7666f4" title="Exchange Listing" percentage="25%" />
            <ProgressBar bgcolor="#736d9f" title="Reserve Capital" percentage="15%" />
            <ProgressBar bgcolor="#3f3f42" title="Owners" percentage="10%" />
            <ProgressBar bgcolor="#7f7faa" title="Development" percentage="09%" />
            <ProgressBar bgcolor="#5d4d73" title="Marketing" percentage="05%" />
            <ProgressBar bgcolor="#9588f8" title="Charity(Community Choice)" percentage="01%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDistribution
