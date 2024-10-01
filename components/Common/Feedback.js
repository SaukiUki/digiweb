import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class Feedback extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <div className="quotes-icon">
                            <img src="/images/left-quote-white.png" alt="icon" />
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>Digi Kreasi salah satu penyedia pembuatan website dan aplikasi sekolah terbaik, khususnya untuk sekolah kami.</p>

                                <div className="bar"></div>

                                <h3>Sekolah El Fatih</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Terima kasih Digi Kreasi yang sudah mendigitalisasi sistem donasi Yakesma Banten sehingga mempermudah para donatur untuk berdonasi.</p>

                                <div className="bar"></div>

                                <h3>Yakesma Banten</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Kami ucapkan terima kasih banyak kepada tim Digi Kreasi telah membuatkan platform e-learning untuk sekolah kami.</p>

                                <div className="bar"></div>
                                
                                <h3>Sekolah Madani</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Sistem klinik cerdas yang sudah dibuatkan tim Digi Kreasi patut dipakai untuk klinik-klinik yang lain. Terima kasih Digi Kreasi.</p>

                                <div className="bar"></div>
                                
                                <h3>Klinik Anggrek</h3>
                            </div>


                        </OwlCarousel> : ''}
                    </div>
                </div>

                {/* Client image */}
                <div className="client-image-box">
                    <img src="/images/clients/client1.png" className="client1" alt="client" />
                    <img src="/images/clients/client2.png" className="client2" alt="client" />
                    <img src="/images/clients/client3.png" className="client3" alt="client" />
                    <img src="/images/clients/client4.png" className="client4" alt="client" />
                    <img src="/images/clients/client5.png" className="client5" alt="client" />
                    <img src="/images/clients/client6.png" className="client6" alt="client" />
                    <img src="/images/clients/client7.png" className="client7" alt="client" />
                    <img src="/images/clients/client8.png" className="client8" alt="client" />
                </div>
            </section>
        );
    }
}

export default Feedback;