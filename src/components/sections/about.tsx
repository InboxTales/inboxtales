import SlideUp from "@/utils/animations/slideUp"

const About = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="about-content-part text-center">
                            <h3 className="brand-heading mb-6" style={{ color: '#fa4616' }}>Empowering Digital Success Stories</h3>
                            <p className="brand-text mb-6" style={{ maxWidth: 700, margin: '0 auto', color: '#fff' }}>
                                InboxTales is a digital agency dedicated to transforming ideas into impactful digital solutions. Our team blends creativity, technology, and strategy to help businesses grow, innovate, and thrive in a digital-first world.
                            </p>
                            <p className="brand-text mb-6" style={{ maxWidth: 700, margin: '0 auto', color: '#fff' }}>
                                From web app development to digital marketing, design, and enterprise integration, we deliver results that matter. Our mission is to make every client’s inbox the start of a new success story.
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About