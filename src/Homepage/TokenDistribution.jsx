import React from 'react';
import {  Row, Image, ProgressBar, Col } from 'react-bootstrap';
import {Distribution} from '../assets/ImageIndex';

function TokenD() {
    return (
        <>
        {/* <iframe width="100%" height="1080" src="https://www.youtube.com/embed/8zIf0XvoL9Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <div className="token_distribution">
                <div className="heading">
                    <h4><span className="blue">FET </span>Token Distribution</h4>
                    <p>This how we plan to distribute all the 200 million Fraction Estate Tokens.</p>
                </div>
                <div className="token_dist_body">
                    <Row>
                        <Col xxl={6} lg={6} md={6} xs={12}>
                            <div className="token_image">
                                <Image className="img-fluid" src={Distribution} />
                            </div>
                        </Col>
                        <Col xxl={6} lg={6} md={6} xs={12}>
                            <div className="progress_label">
                                <label>Faucet Sale
                                    <span>35%</span>
                                </label>
                                <ProgressBar now={35} />
                            </div>
                            <div className="progress_label blueC">
                                <label>Exchange Listing
                                    <span>25%</span>
                                </label>
                                <ProgressBar now={25} />
                            </div>
                            <div className="progress_label light_b">
                                <label>Reserve Capital
                                    <span>15%</span>
                                </label>
                                <ProgressBar now={15} />
                            </div>
                            <div className="progress_label blck">
                                <label>Owners
                                    <span>10%</span>
                                </label>
                                <ProgressBar now={10} />
                            </div>
                            <div className="progress_label grey">
                                <label>Development
                                    <span>09%</span>
                                </label>
                                <ProgressBar now={9} />
                            </div>
                            <div className="progress_label blck_d">
                                <label>Marketing
                                    <span>05%</span>
                                </label>
                                <ProgressBar now={5} />
                            </div>
                            <div className="progress_label burgandy">
                                <label>Charity (Community Choice)
                                    <span>01%</span>
                                </label>
                                <ProgressBar now={1} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default TokenD;
