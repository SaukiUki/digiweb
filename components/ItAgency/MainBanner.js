import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1>Digital Tranformation</h1>
                                                
                                            <p>Selamat datang di Digi Kreasi, penyedia layanan pembuatan website profesional yang siap membantu bisnis Anda berkembang dalam dunia digital. Dengan solusi inovatif dan desain yang menarik, kami berkomitmen menjadi mitra transformasi digital yang andal bagi Anda. Wujudkan potensi bisnis Anda bersama Digi Kreasi!.</p>
                                        
                                            <Link href="https://wa.me/62881025489658">
                                                <a className="btn btn-primary">HUBUNGKI KAMI</a>
                                            </Link>

                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                    <i className="icofont-ui-play"></i> BAGAIAMANA KAMI BEKERJA
                                                </a>
                                            </Link>
                                        </div> 
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/hero-banner14.jpg" alt="Animate image" />
                                        </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;