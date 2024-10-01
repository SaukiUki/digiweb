import React, { Component } from "react";
import Link from "next/link";

class PricingStyleTwo extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
          <div className="container">
            <div className="section-title">
              <h2>Website Profile</h2>
              <ul className="tabs">
                <span>
                  <p>
                    Untuk: Perusahaan, Sekolah, Universitas, Rumah Sakit,
                    Puskesmas, Klinik, Instansi Pemerintah, Sales Mobil,
                    Personal, Bisnis, Tour Travel, Sales Internet, dsb.
                  </p>
                </span>
              </ul>
            </div>

            <div className="tab pricing-list-tab">
              {/* Pricing Tab List */}

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row">
                    {/* Single pricing table */}
                    <div className="col-lg-4 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Mini</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>499.000
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>1 Pilihan
                            Desain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 Sub
                            Domain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 150 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 15 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>Garansi
                            dari hacker dan virus
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 449.000/ tahun
                          </li>
                        </ul>

                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Single pricing table */}
                    <div className="col-lg-4 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Lite</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>699.000
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>
                            Website Siap Pakai
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Banyak Pilihan Desain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Header dan background bisa diganti
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 Domain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 150 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 15 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>Garansi
                            dari hacker dan virus
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 499.000/ tahun
                          </li>
                        </ul>

                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Single pricing table */}
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Bisnis</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>1.499.000
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>
                            Website Siap Pakai
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Desain professional, mewah dan custom (bisa
                            mengajukan desain sendiri)
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 Domain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 250 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 25 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 749.000/ tahun
                          </li>
                        </ul>
                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Landing Page */}

          <div className="container">
            <div className="section-title">
              <h2>WEB Berita/UMKM</h2>
              <ul className="tabs">
                <span>
                  <p>
                    Website Berita biasanya digunakan untuk portal berita
                    online. Untuk website UMKM dapat menampilkan produk-produk
                    dan juga profil dari UMKM tersebut.
                  </p>
                </span>
              </ul>
            </div>

            <div className="tab pricing-list-tab">
              {/* Pricing Tab List */}

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row">
                  <div className="col-lg-4 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Start Up</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>699.000
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>
                            Website Siap Pakai
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 pilihan
                            desain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1
                            Domain(.com)
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 150 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 15 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>Garansi
                            dari hacker dan virus
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 499.000/ tahun
                          </li>
                        </ul>

                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Single pricing table */}
                    <div className="col-lg-4 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Grow Up</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>1.249.000
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>
                            Website Siap Pakai
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 pilihan
                            desain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1
                            Domain(.com)
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 150 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 15 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>Garansi
                            dari hacker dan virus
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 799.000/ tahun
                          </li>
                        </ul>

                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Single pricing table */}
                    <div className="col-lg-4 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="pricing-header">
                          <h3>Paket Berita Premium</h3>
                        </div>

                        <div className="price">
                          <sup>Rp</sup>1.999.000
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="icofont-check-circled"></i>
                            Website Siap Pakai
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Banyak pilihan desain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>1 Domain
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Hosting 250 MB
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Bandwidth 25 GB/ bulan
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>Garansi
                            dari hacker dan virus
                          </li>
                          <li>
                            <i className="icofont-check-circled"></i>
                            Perpanjangan: Rp. 999.000/ tahun
                          </li>
                        </ul>

                        <div className="btn-box">
                          <Link href="#">
                            <a className="btn btn-primary">
                              <i className="bx bxs-hot"></i>
                              Pesan Sekarang
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="others-options d-flex justify-content-center">
              <Link href="/pricing">
                <a className="btn btn-primary">Harga Selengkapnya</a>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PricingStyleTwo;
