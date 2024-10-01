import React, { Component } from 'react';
import Link from 'next/link';

class ServiceStyleTwo extends Component {
    render() {
        return (
            <>
                <div className="service-style-two ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-info pr-50">
                                    <div className="info-head">
                                        <h2 className="title">Pembuatan Website dan Aplikasi Android</h2>
                                        <p>Kembangkan situs web profesional dan Aplikasi Mobile milik Anda sendiri yang inovatif, mudah digunakan, dan dapat memaksimalkan potensi bisnis Anda.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Company Profile
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Website E- Commerce
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Website Layanan Jasa
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Website Costum
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Aplikasi Berbasis Android
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Dan Lain Lain
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-read-more">
                                        <Link href="https://wa.me/62881025489658">
                                            <a className="btn btn-primary">
                                                <i className="icofont-tasks"></i> Hubungi Kami
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-right-img">
                                    <img src="/images/services/it-service1.png" alt="Service Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-style-two ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-left-img">
                                    <img src="/images/services/it-service4.png" alt="Service Image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-info pl-50">
                                    <div className="info-head">
                                        <h2 className="title">Pelatihan Digital</h2>
                                        <p>Belajar Website Developer, Fullstack Developer, Mobile Developer, hingga UI/UX Desgin bersama mentor profesional untuk tingkatkan hard skill & soft skill mu.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Website Developer
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Mobile Developer
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                UI/UX Desgin
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Fullstack Developer
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-read-more">
                                        <Link href="/service-details">
                                            <a className="btn btn-primary">
                                                <i className="icofont-tasks"></i> Daftar Sekarang
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-style-two ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-info pr-50">
                                    <div className="info-head">
                                        <h2 className="title">Jasa Domain dan Hosting</h2>
                                        <p>Website Anda layak mendapatkan kecepatan, uptime, dan keamanan terbaik. Pindahkan hosting website Anda dari provider yang sekarang ke Digikreasi dan dapatkan promo gratis 3 bulan pertama.
Anda juga akan dibantu memindahkan seluruh data dari akun hosting lama ke Digikreasi. Gratis!</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Cloud Database
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Email Server
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Domain dan Hosting
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-read-more">
                                        <Link href="https://wa.me/62881025489658">
                                            <a className="btn btn-primary">
                                                <i className="icofont-tasks"></i> Hubungi Kami
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-right-img">
                                    <img src="/images/services/it-service3.png" alt="Service Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default ServiceStyleTwo;