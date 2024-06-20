import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import logo from '../assets/images/gold-2.png';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState({ aboutUs: false, projectsProgrammes: false, languages: false, mediaCenter: false });
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleDropdown = (dropdown) => {
        setDropdownVisible({ ...dropdownVisible, [dropdown]: !dropdownVisible[dropdown] });
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const currentLanguage = i18n.language;
        if (currentLanguage === 'ar') {
            document.body.dir = 'rtl';
            document.body.classList.add('arabic');
            document.body.classList.remove('english', 'french', 'spanish');
        } else {
            document.body.dir = 'ltr';
            document.body.classList.add('english');
            document.body.classList.remove('arabic', 'french', 'spanish');
        }
    }, [i18n.language]);

    return (
        <header className="navbar bg-primary">
            <div className="container p-4">
                <div className="nav-wrapper grid">
                    <div className="flex justify-between items-center gap-1">
                        <Link to="/" className="logo">
                            <img className="m-auto" src={logo} alt="Logo" />
                        </Link>
                        <div className="input-holder flex items-center">
                            <input type="search" placeholder={t('search_placeholder')} />
                            <div className="search-icon flex items-center bg-secondary text-white p-2">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="user-info flex items-center">
                            <div className="social-icons flex items-center">
                                <Link to="" className="social-icon bg-primary m-1 p-3 text-white circle">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </Link>
                                <Link to="" className="social-icon bg-primary m-1 p-3 text-white circle">
                                    <i className="fab fa-instagram fa-xl"></i>
                                </Link>
                                <Link to="" className="social-icon bg-primary m-1 p-3 text-white circle">
                                    <i className="fab fa-snapchat fa-xl"></i>
                                </Link>
                                <button className="btn">
                                    <Link className='fs-300 bg-secondary p-3 pr-4 pl-4 text-white pill-corners' to='/contact'>
                                        <span className="mr-2"><i className="far fa-envelope"></i></span> {t('call_us')}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary p-2">
                <div className="container">
                    <div className="secondary-nav bg-primary">
                        <div>
                            <div className="flex justify-between">
                                <div className='action d-none f-column justify-center items-center'>
                                    <i aria-hidden="true" className="fas fa-edit text-white"></i>
                                    <button className='cta-buttons bg-transparent border-none fs-300 text-white fw-bold'>Help Us</button>
                                </div>
                                <div className="menu-icon m-auto lg-d-none" onClick={toggleMenu}>
                                    <i className="fa-solid fa-bars text-white"></i>
                                </div>

                                <div className='action d-none f-column justify-center items-center'>
                                    <i aria-hidden="true" className="fas fa-phone-alt text-white"></i>
                                    <button className='cta-buttons bg-transparent border-none fs-300 text-white fw-bold'>
                                     <Link to="contact"> Call Us</Link>
                                    </button>
                                </div>
                            </div>
                            <div className={!menuActive ? `flex justify-between items-center p-3 sm-d-none` : `flex justify-between items-center p-3 active`}>
                                <div><Link className="link fw-bold fs-200 m-1 " to="/"><span className="mr-1"><i className="fas fa-home"></i></span> {t('home')}</Link></div>
                                <div className="dropdown">
                                    <a href="/" className="link fw-bold fs-200 m-1 " onClick={(e) => { e.preventDefault(); toggleDropdown('aboutUs'); }}> {t('about_us')} <span className="ml-1"><i className="fas fa-caret-down"></i></span></a>
                                    {dropdownVisible.aboutUs && (
                                        <div className="dropdown-menu">
                                            <Link className='' to="/about-us">{t('about_us_dropdown.who_we_are')}</Link>
                                            <Link className='' to="/directors">{t('about_us_dropdown.board_of_directors')}</Link>
                                            <Link className='' to="/soon">{t('about_us_dropdown.shareholders')}</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown">
                                <span className="mr-1">
                                          <i className="fa fa-cog text-white fs-200"></i>
                                    </span>
                              
                                    <a href="/" className="link fw-bold fs-200 m-1 " onClick={(e) => { e.preventDefault(); toggleDropdown('projectsProgrammes'); }}>{t('projects_programmes')} <span className="ml-1"><i className="fas fa-caret-down"></i></span></a>
                                    {dropdownVisible.projectsProgrammes && (
                                        <div className="dropdown-menu">
                                            <Link className='' to="/soon">{t('projects_programmes_dropdown.economic_projects')}</Link>
                                            <Link className='' to="/soon">{t('projects_programmes_dropdown.tourism_projects')}</Link>
                                            <Link className='' to="/soon">{t('projects_programmes_dropdown.entertainment_programmes')}</Link>
                                            <Link className='' to="/soon">{t('projects_programmes_dropdown.scientific_programmes')}</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown">
                                    <a href="/" className="link fw-bold fs-200 m-1 " onClick={(e) => { e.preventDefault(); toggleDropdown('languages'); }}>{t('languages')} <span className="ml-1"><i className="fas fa-caret-down"></i></span></a>
                                    {dropdownVisible.languages && (
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item bg-transparent w-full border-none" onClick={() => changeLanguage('en')}>{t('english')}</button>
                                            <button className="dropdown-item bg-transparent w-full border-none" onClick={() => changeLanguage('ar')}>{t('arabic')}</button>
                                            <button className="dropdown-item bg-transparent w-full border-none" onClick={() => changeLanguage('fr')}>{t('french')}</button>
                                            <button className="dropdown-item bg-transparent w-full border-none" onClick={() => changeLanguage('sp')}>{t('spanish')}</button>
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown">
                                <span className="mr-1">
                                         <i className="fa fa-file-audio text-white fs-200"></i>
                                    </span>
                               
                                    <a href="/" className="link fw-bold fs-200 m-1 " onClick={(e) => { e.preventDefault(); toggleDropdown('mediaCenter'); }}>{t('media_center')} <span className="ml-1"><i className="fas fa-caret-down"></i></span></a>
                                    {dropdownVisible.mediaCenter && (
                                        <div className="dropdown-menu">
                                            <Link className='' to="/soon">{t('media_center_dropdown.gallery')}</Link>
                                            <Link className='' to="/soon">{t('media_center_dropdown.video_library')}</Link>
                                            <Link className='' to="/soon">{t('media_center_dropdown.news')}</Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <Link className="link fw-bold fs-200 m-1 " to="/contact">
                                        <span className="mr-1"><i className="fa fa-envelope-open" aria-hidden="true"></i></span> {t('suggestion')}</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
