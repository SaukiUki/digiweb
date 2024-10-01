import React, { Component } from 'react';
import Link from 'next/link';

class WorksStyleTwo extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>All Portofolio</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work1.jpg" alt="image" />

                                    <div className="content">

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Sekolah El Fatih</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://elfatih.sch.id/">
                                            <a className="custom-btn">Lihat Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work2.jpg" alt="image" />
                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Lazisu Banten</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://laziskubanten.id/">
                                            <a className="custom-btn">Lihat Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work3.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Yakesma Banten</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://www.yakesmabanten.id/">
                                            <a className="custom-btn">Lihat Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work4.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Runby E-Commerce</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://ecommerce.runbyindonesia.com/">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work5.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>SIPENGASBAR DPRD BANTEN</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://sipengasbar-dprdbanten.web.app/admin">
                                            <a className="custom-btn">Lihat Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work6.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Sistem Manajemen Partai</a>
                                            </Link>
                                        </h3>

                                        <Link href="https://nasdem12123.web.app/">
                                            <a className="custom-btn">Lihat Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-work">
                            <Link href="/portfolio">
                                <a className="btn btn-primary">
                                    <i className="icofont-tasks"></i> View More
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorksStyleTwo;