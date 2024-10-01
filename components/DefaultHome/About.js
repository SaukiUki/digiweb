import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img1.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                        <p>Digi Kreasi adalah penyedia layanan pembuatan website profesional yang berfokus pada solusi digital inovatif. Kami berkomitmen menjadi mitra transformasi digital terbaik untuk mendukung pertumbuhan bisnis Anda.</p>
                                    </div>
                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>Digi Kreasi adalah tim profesional kreatif yang ahli dalam pengembangan website dan solusi digital. Kami berdedikasi untuk menghadirkan transformasi digital yang inovatif dan tepat sasaran bagi bisnis Anda.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our History</h4>
                                        <p>Digi Kreasi didirikan dengan visi menjadi mitra transformasi digital terbaik. Sejak awal, kami telah membantu berbagai bisnis membangun kehadiran online yang kuat dengan solusi website yang inovatif dan efektif.</p>
                                    </div>
                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <p>Misi kami adalah membantu bisnis berkembang melalui solusi website inovatif, fungsional, dan user-friendly. Digi Kreasi berkomitmen menjadi mitra terpercaya dalam transformasi digital yang berkelanjutan.</p>
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
                </section>
            </>
        );
    }
}

export default About;