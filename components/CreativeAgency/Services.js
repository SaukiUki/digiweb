import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>LAYANAN KAMI</h2>
                            <p>Kami menyediakan solusi pembuatan website yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda, mulai dari landing page hingga website e-commerce lengkap. Berikut beberapa layanan unggulan yang kami tawarkan:</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Konsultasi Bisnis Digital</a>
                                        </Link>
                                    </h3>
                                    <p>Konsultasikan rencana bisnis Anda bersama tim Kami. kami akan memberikan solusi dital paling efektif dan terjangkau.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Pembuatan Website</a>
                                        </Link>
                                    </h3>
                                    <p>Kembangkan situs web profesional milik Anda sendiri yang inovatif, mudah digunakan, dan dapat memaksimalkan potensi bisnis Anda.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Tim profesional kami akan mengelola semua aktivitas pemasaran online bisnis Anda secara profesional.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Pembuatan Aplikasi Android</a>
                                        </Link>
                                    </h3>
                                    <p>Kelola bisnis Anda dengan aplikasi mobile, dan raih kesempatan meningkatkan keuntungan bisnis Anda hanya dalam genggaman.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Website Instan</a>
                                        </Link>
                                    </h3>
                                    <p>Kembangkan bisnis anda dengan membuat Website impian berharga murah dan cepat hanya dengan beberapa kali klik.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Pelatihan Digital</a>
                                        </Link>
                                    </h3>
                                    <p>Belajar Digital Marketing hingga Fullstack Developer bersama mentor profesional tersertifikasi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;