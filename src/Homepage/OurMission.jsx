import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import {MissionImage} from '../assets/ImageIndex';

function ourMissionPage() {
    return (
        <>
            <div className="our_mission">
                <div className="heading">
                    <h4>Invest in Real Estate Your Way</h4>
                    <p>With Fraction.Estate, you can invest in real-world properties in a fractional way, meaning you can own a piece of a property without having to buy it in its entirety. Our platform eliminates the need for intermediaries, making it easier and cheaper for investors to buy and sell real estate and for developers to raise capital.</p>
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
                                <h3 className="reap_benefits">Reap the Benefits of Real Estate Tokenization!</h3>
                                <p>Each tokenized property is leased to tenants, producing a monthly rental yield. This creates a global, partial model of land ownership managed entirely on the blockchain. By holding these tokens, you own a portion of the actual property and its assets. The benefits of investing through our platform include:</p>
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