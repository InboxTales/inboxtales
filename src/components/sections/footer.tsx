import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright-text">
                                <p>© 2025 InboxTales. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer-bottom-menu">
                                <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/case-studies">Case Studies</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-of-service">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer