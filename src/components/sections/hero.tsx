'use client'
import { Link as Linkscroll } from 'react-scroll';
import SlideUp from "@/utils/animations/slideUp"
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3 className="hero-subtitle"><i className="ri-mail-line" />Every inbox is the start of a success story</h3>
                            <h2 className="hero-title">
                                We Craft&nbsp;
                                <span className="text-[#fa4616] hero-typewriter">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Web Apps',
                                                'Digital Products',
                                                'Brand Experiences',
                                                'Growth Systems',
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                <span className="hero-fixed-text" style={{ display: 'block', marginTop: '0.5em' }}>
                                    That Turn Ideas Into Digital Success Stories
                                </span>
                            </h2>
                            <p className="hero-description">Build websites, apps & marketing systems that spark business growth — all in one place. Your journey begins the moment we say &#39;hello.&#39;</p>
                            <div className="hero-btns">
                                <Linkscroll smooth={true} to="contact" className="theme-btn btn-brand">Start Your Story</Linkscroll>
                                <Linkscroll smooth={true} to="services" className="theme-btn differenct-color btn-brand">View Our Services</Linkscroll>
                            </div>
                            <div className="dot-shape"><Image src="/images/shapes/shape1.png" alt="Shape" width={64} height={64} /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero