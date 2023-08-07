import React from 'react'
import Button from '../button/button'
import fractionEstateToken from '../../assets/images/png/fraction-estate-token.png'
import SectionTitle from '../section-title/section-title'
import { data } from '../../constants/data'

const FractionEstate = () => {
  return (
    <div className="fraction__estate--section">
      <div className="container">
        <SectionTitle
          title={[<span className="highlight__text">Fraction Estate</span>, "Token"]}
          subTitle="The Fraction Estate ($FET) Token is the utility token of the Fraction Estate marketplace platform. It will be used as a payment method for various features of the platform and as a fee mechanism for DeFi features."
        />
        <div className="two__columns--grid gap__50">
          <div className="two__columns--left">
            {
              data.phaseData.map((x, i) => (
                <div className="two__columns--grid" key={i}>
                  <div className="two__columns--left">
                    <h3 className="two__columns--label">{x.phaseLabel}</h3>
                  </div>
                  <div className="two__columns--right">
                    <div className="two__columns--presale">
                      <p>{x.blockLabel}</p>
                      <div className="two__columns--presale--block">
                        <h3>{x.adaText}</h3>
                        <p>{x.fet}</p>
                        <p>{x.token}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="two__columns--right">
            <img src={fractionEstateToken} alt="Fraction Estate Token" />
          </div>
        </div>
        <Button
          buttonText="Buy Now in Presale"
        />
      </div>
    </div>
  )
}

export default FractionEstate
