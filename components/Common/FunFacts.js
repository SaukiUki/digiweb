import React, { Component } from 'react';

class FunFacts extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-like"></i>
                                <h3>50<span>Client</span></h3>
                                <p>Merasa Sangat Puas Dengan Hasil Website Kami</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-diamond"></i>
                                <h3>30 <span>Projek</span></h3>
                                <p>30++ Projek Sedang Kami Kerjakan</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-portfolio"></i>
                                <h3>100 <span>Projek</span></h3>
                                <p>Sudah lebih dari 100 Projek Kami Selesaikan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;