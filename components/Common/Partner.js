import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Dipercai Oleh</h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="/" target="_blank">
                                    <img src="/images/partners/partnersekolah.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partnerklinik.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partneryakesma.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partnersekolahmadani.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partnerislamic.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partnerlazisku.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;