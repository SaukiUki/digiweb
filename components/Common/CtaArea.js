import React, { Component } from 'react';
import Link from 'next/link';

class CtaArea extends Component {
    render() {
        return (
            <div className="cta-area bg-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="cta-content">
                                <h3>Punya Bisnis Tapi Masih Belum Punya Website</h3>
                                <p>Langsung Hubungi Kami</p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-4">
                            <div className="cta-btn-box">
                                <Link href="/contact">
                                    <a className="btn btn-primary">Hubungi Kami Sekarang</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaArea;