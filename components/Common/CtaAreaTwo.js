import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <h3>Punya Project atau Ingin Membuat Aplikasi?</h3>
                        <span>Hubungi kami segera dan konsultasikan kebutuhan digital untuk bisnis Anda lebih lanjut.</span>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="https://wa.me/62881025489658">
                            <a className="custom-btn">HUBUNGI KAMI</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;