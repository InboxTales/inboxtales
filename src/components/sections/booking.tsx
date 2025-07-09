import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"
import Link from "next/link"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>Ready to start your digital success story?</h2>
                            <p>Let&apos;s explore how InboxTales can transform your business with custom digital solutions that drive real results.</p>
                            <div className="hero-btns">
                                <a href="/contact" className="theme-btn">Start Your Project</a>
                                <a href="/services" className="theme-btn differenct-color">View Our Services</a>
                            </div>
                            <Link href="/">
                                <Image width={200} height={54} src="/images/logos/logo.png" alt="InboxTales Logo" title="InboxTales" />
                            </Link>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking