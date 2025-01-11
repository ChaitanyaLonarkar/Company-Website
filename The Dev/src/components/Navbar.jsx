import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleDropdownLinkClick = () => {
        setIsDropdownOpen(!isDropdownOpen); // Close dropdown on link click
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>THE Dev</h1>
                </Link>
            </div>
            <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <i className='menu-icon'>{isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}</i>
            </div>
            <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <li 
                    className="navbar-item dropdown" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    onClick={handleDropdownLinkClick}
                >
                    <Link to="/services" className="navbar-item">
                        SERVICES
                    </Link> 
                    <i className='icon-dropdown'> {!isDropdownOpen?<SlArrowDown/>: <SlArrowUp/>} </i>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu" onMouseLeave={handleMouseLeave}>
                            <li><Link to="/services/website-design" onClick={handleDropdownLinkClick }>Website design</Link></li>
                            <li><Link to="/services/software-development" onClick={handleDropdownLinkClick}>Software development</Link></li>
                            <li><Link to="/services/mobile-applications" onClick={handleDropdownLinkClick}>Mobile applications</Link></li>
                            <li><Link to="/services/digital-marketing-domain-hosting" onClick={handleDropdownLinkClick}>Digital marketing domain and hosting</Link></li>
                            <li><Link to="/services/seo" onClick={handleDropdownLinkClick}>SEO</Link></li>
                            <li><Link to="/services/cyber-security" onClick={handleDropdownLinkClick}>Cyber security service</Link></li>
                            <li><Link to="/services/it-consulting" onClick={handleDropdownLinkClick}>IT consulting</Link></li>
                            <li><Link to="/services/social-media-management" onClick={handleDropdownLinkClick}>Social media management</Link></li>
                            <li><Link to="/services/digital-marketing" onClick={handleDropdownLinkClick}>Digital marketing</Link></li>
                            <li><Link to="/services/mobile-productions" onClick={handleDropdownLinkClick}>Mobile productions</Link></li>
                            <li><Link to="/services/marketing-strategy-consulting" onClick={handleDropdownLinkClick}>Marketing and strategy consulting</Link></li>
                            <li><Link to="/services/all-kind-of-engineering-projects" onClick={handleDropdownLinkClick}>All kinds of engineering projects</Link></li>
                            <li><Link to="/services/industry-automation" onClick={handleDropdownLinkClick}>Industry automation</Link></li>
                            <li><Link to="/services/mines-automation" onClick={handleDropdownLinkClick}>Mines automation</Link></li>
                            <li><Link to="/services/plant-automation" onClick={handleDropdownLinkClick}>Plant automation</Link></li>

                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={ toggleMobileMenu}>
                    <Link to="/company" >COMPANY</Link>
                </li>
                <li className="navbar-item" onClick={ toggleMobileMenu}>
                    <Link to="/work">WORK</Link>
                </li>
                <li className="navbar-item" onClick={ toggleMobileMenu}>
                    <Link to="/learn">LEARN</Link>
                </li>
                <li className="navbar-item" onClick={ toggleMobileMenu}>
                    <Link to="/career">CAREER</Link>
                </li>
                <li onClick={ toggleMobileMenu}>
                    <Link to="/hire-us" className="hire-us-mob">Hire Us</Link>
                </li>
            </ul>
            <Link to="/hire-us" className="hire-us">Hire Us</Link>
        </nav>
    );
};

export default Navbar;
