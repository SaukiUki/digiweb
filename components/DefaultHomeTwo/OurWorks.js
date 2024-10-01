import React, { Component } from 'react';
import Link from 'next/link';

class OurWorks extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Beberapa Projek Yang Sudah Kami Kerjakan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg1 text-center">
                                    <div className="content">
                                        <h3>
                                            <Link href="https://elfatih.sch.id/">
                                                <a>Sekolah El Fatih</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="https://elfatih.sch.id/">
                                        <a className="btn btn-primary">Selengkapnya</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape1.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg2 text-center">
                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Lembaga Amil Zakat</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">Selengkapnya</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg3 text-center">
                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Yakesma Banten</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">Selengkapnya</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>                      
                        </div>
                        <div className="view-more-work">
                            <Link href="/portfolio">
                                <a className="btn btn-primary">All Projek</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;