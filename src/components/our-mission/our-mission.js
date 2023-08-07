import React from 'react'
import ourMissionThumb from '../../assets/images/png/our-mission-thumb.png'
import SectionTitle from '../section-title/section-title'

const OurMission = () => {
  return (
    <div className="our__mission--section">
      <div className="container">
        <SectionTitle
          title="Our Mission"
          subTitle="By removing the middleman, Fraction Estate makes it easier and cheaper for investors to buy/sell real estate and owner/developers to raise capital."
        />
        <div className="two__columns--grid gap__100">
          <div className="two__columns--left">
            <img src={ ourMissionThumb } alt="" />
          </div>
          <div className="two__columns--right">
            <p>Fraction.estate will be revolutionizing the real estate market by the concept of asset tokenization, every land resource is held in its own organization whose offers are addressed by tokens on the blockchain. By holding these tokens, you own a portion of the legitimate substance, and likewise, the actual property.</p>
            <p>Each tokenized property is leased to occupants, producing a month to month rental yield. This considers a worldwide, partial model of land possession led totally on-chain. The benifits you will get:</p>
            <div className="two__columns--grid">
              <div className="two__columns--custom--grid">
                <div className="two__columns--inner--left">
                  <h2>1</h2>
                </div>
                <div className="two__columns--inner--right">
                  <p>The ability to invest in a single property rather than a fund.</p>
                </div>
              </div>
              <div className="two__columns--custom--grid">
                <div className="two__columns--inner--left">
                  <h2>2</h2>
                </div>
                <div className="two__columns--inner--right">
                  <p>Voting and governance rights over the property.</p>
                </div>
              </div>
            </div>
            <div className="two__columns--grid">
              <div className="two__columns--custom--grid">
                <div className="two__columns--inner--left">
                  <h2>3</h2>
                </div>
                <div className="two__columns--inner--right">
                  <p>More frequent dividend payouts.</p>
                </div>
              </div>
              <div className="two__columns--custom--grid">
                <div className="two__columns--inner--left">
                  <h2>4</h2>
                </div>
                <div className="two__columns--inner--right">
                  <p>Less overhead and fewer management fees.</p>
                </div>
              </div>
            </div>
            <div className="two__columns--grid">
              <div className="two__columns--custom--grid">
                <div className="two__columns--inner--left">
                  <h2>5</h2>
                </div>
                <div className="two__columns--inner--right">
                  <p>Lower minimum investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
