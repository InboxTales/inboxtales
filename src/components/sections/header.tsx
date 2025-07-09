'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { menuList } from "@/utils/fackData/menuList"
import "../../assets/css/header.css"

const Header = () => {
    const [isFixed, setIsFixed] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;
            if (windowPos >= 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className={`modern-header ${isFixed ? "fixed-header" : ""}`}>
            <div className="header-container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="header-logo">
                        <Link href="/">
                            <Image
                                src="/images/logos/logo.png"
                                alt="InboxTales Logo"
                                title="InboxTales"
                                width={160}
                                height={48}
                                className="header-logo-img"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-menu">
                            {menuList.map((item) =>
                                item.submenu ? (
                                    <li key={item.id} className="nav-item dropdown">
                                        <Link href={item.path || '#'} className="nav-link">
                                            {item.label}
                                            <i className="ri-arrow-down-s-line dropdown-icon"></i>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            {item.submenu.map((sub) => (
                                                <li key={sub.id}>
                                                    <Link href={sub.path || '#'} className="dropdown-link">
                                                        {sub.label}
                                                        <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={item.id} className="nav-item">
                                        <Link href={item.path || '#'} className="nav-link">
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <div className="header-cta">
                        <Link href="/contact" className="cta-button">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-menu">
                        {menuList.map((item) =>
                            item.submenu ? (
                                <li key={item.id} className="mobile-nav-item dropdown">
                                    <Link href={item.path || '#'} className="mobile-nav-link">
                                        {item.label}
                                        <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                    <ul className="mobile-dropdown-menu">
                                        {item.submenu.map((sub) => (
                                            <li key={sub.id}>
                                                <Link href={sub.path || '#'} className="mobile-dropdown-link">
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={item.id} className="mobile-nav-item">
                                    <Link href={item.path || '#'} className="mobile-nav-link">
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                        <li className="mobile-nav-item">
                            <Link href="/contact" className="mobile-cta-button">
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header