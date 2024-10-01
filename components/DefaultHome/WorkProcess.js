import React, { Component } from 'react';

class WorkProcess extends Component {
    render() {
        return (
            <>
                <section className="work-process-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Proses Kerja Kami</h2>
                            <p>6 Proses Pesan Website Impian Anda</p>
                        </div>

                        <div className="work-process">
                            <img src="/images/man-with-mobile.png" alt="logo" />

                            <div className="work-process-list">
                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display1"></i>
                                    </div>
                                    <h3>Consultation</h3>
                                    
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display2"></i>
                                    </div>
                                    <h3>Planning</h3>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-airplay"></i>
                                    </div>
                                    <h3>Design</h3>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <h3>Development</h3>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-light"></i>
                                    </div>
                                    <h3>Testing & Review</h3>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-sun"></i>
                                    </div>
                                    <h3>Launch & Support</h3>
                                </div>
                            </div>

                            <img src="/images/circle.png" className="rotateme circle-image" alt="image" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorkProcess;