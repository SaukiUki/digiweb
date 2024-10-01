import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img src="/images/logo.png" alt="image" />
                      </a>
                    </Link>
                  </div>

                  <p>
                    Kami merupakan perusahaan yang menyediakan solusi aplikasi,
                    website, dan pelatihan digital.
                  </p>

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>Explore</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>Tentang Digi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Layanan</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Quick Links</h3>

                  <ul className="list">
                    <li>
                      <Link href="/contact">
                        <a>Hubungi Kami</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>Faq</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Hubungi Kami</h3>

                  <ul className="get-in-touch">
                    <li>
                      <i className="icofont-home"></i> Jl. Pangeran Antasari No.118, Masigit, Kec. Jombang, Kota Cilegon, Banten 42414
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+62 881-0254-89658">+62 881-0254-89658</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="digikreasi636@gmail.com">
                        digikreasi636@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>Copyright &copy; {currentYear} Digi Kreasi.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
