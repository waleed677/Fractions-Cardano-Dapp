import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import {MissionImage} from '../assets/ImageIndex';

function ourMissionPage() {
    return (
        <>
            <div className="our_mission">
                <div className="heading">
                    <h4>Our Mission</h4>
                    <p>By removing the middleman, Fraction Estate makes it easier and cheaper for investors to buy/sell real estate and owner/developers to raise capital.</p>
                </div>
                <div className="mission_body">
                    <Row>
                        <Col xxl={5} lg={12} md={12} xs={12}>
                            <div className="mission_img">
                                <Image className="img-fluid" src={MissionImage} />
                            </div>
                        </Col>
                        <Col xxl={7} lg={12} md={12} xs={12}>
                            <div className="mission_p">
                                <p>Fraction.estate will be revolutionizing the real estate market by the concept of asset tokenization, every land resource is held in its own organization whose offers are addressed by tokens on the blockchain. By holding these tokens, you own a portion of the legitimate substance, and likewise, the actual property. </p>
                                <p className="mt-3">Each tokenized property is leased to occupants, producing a month to month rental yield. This considers a worldwide, partial model of land possession led totally on-chain. The benifits you will get:</p>
                            </div>
                            <div className="two_grids">
                                <div className="order_list">
                                    <div className="list_style">
                                        <h2>1</h2>
                                        <p>The ability to invest in a single property rather than a fund.</p>
                                    </div>
                                    <div className="list_style">
                                        <h2>2</h2>
                                        <p>Voting and governance rights over the property.</p>
                                    </div>
                                    <div className="list_style mb-0">
                                        <h2>3</h2>
                                        <p>More frequent dividend payouts.</p>
                                    </div>
                                </div>

                                <div className="order_list">
                                    <div className="list_style">
                                        <h2>4</h2>
                                        <p>Less overhead and fewer management fees.</p>
                                    </div>
                                    <div className="list_style">
                                        <h2>5</h2>
                                        <p>Lower minimum investment</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ourMissionPage;