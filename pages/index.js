import React, { Component } from 'react';
import Navbar from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import Services from '../components/CreativeAgency/Services';
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHomeTwo/OurWorks';
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo';
import Feedback from '../components/Common/Feedback';
// import Team from '../components/Common/Team';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WorkProcess from '../components/DefaultHome/WorkProcess';
import Pricing from './pricing';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <Services />

                <ServiceStyleTwo/>

                <About />

                <OurWorks />


                <PricingStyleTwo />

                <WorkProcess />

                <Feedback />


                <FunFacts />

                <LatestNewsSlider />

                <CtaArea />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default Index;