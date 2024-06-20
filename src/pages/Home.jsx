// src/components/Home.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";
/* Images Importation */

import heroImg from '../assets/images/hero-img.jpg';
import aboutImg from '../assets/images/about.png';
import projectsImg from '../assets/images/projects.png';
import reportsImg from '../assets/images/reports.png';
import regulationsImg from '../assets/images/regulations.png';
import volunteeringImg from '../assets/images/volunteering.png';
import newsImg from '../assets/images/news.png';
import galleryImg from '../assets/images/gallery.png';
import partner1Img from '../assets/images/partners/partner-1.png';
import partner2Img from '../assets/images/partners/partner-2.png';
import partner3Img from '../assets/images/partners/partner-3.png';
import partner4Img from '../assets/images/partners/partner-4.png';
import playButtonImg from '../assets/images/play-button.png';
import overlay from '../assets/images/youtube-back.png';


export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const currentLanguage = i18n.language;
    if (currentLanguage === 'ar') {
      document.body.dir = 'rtl';
      document.body.classList.add('arabic');
      document.body.classList.remove('english', 'french');
    } else {
      document.body.dir = 'ltr';
      document.body.classList.add('english');
      document.body.classList.remove('arabic', 'french');
    }
    AOS.refresh()
  }, [i18n.language]);

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" data-aos="fade-up">
          <div className="container">
            <h1 className="fs-500 mt-3 mb-4 fw-semi-bold">{t('welcome')}</h1>
            <div className="banner rounded">
            <img src={heroImg} alt="Banner Image" />
            </div>
          </div>
        </section>
        <section className="quick-links  mt-3 mb-3 p-1 gap-1" data-aos="fade-up">
          <div className="container">
            <div className="even-columns items-center justify-center p-4">
              <div className="box" data-aos="zoom-in">
              <img src={aboutImg} alt="About Us" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/about-us">{t('about_us')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <img src={projectsImg} alt="Our Projects" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/our-projects">{t('our_projects')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <img src={reportsImg} alt="Reports" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/reports">{t('reports')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <img src={regulationsImg} alt="Regulations" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/regulations">{t('regulations')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="400">
              <img src={volunteeringImg} alt="Volunteering" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/volunteering">{t('volunteering')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="500">
              <img src={newsImg} alt="Our News" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/our-news">{t('our_news')}</Link>
                </button>
              </div>
              <div className="box" data-aos="zoom-in" data-aos-delay="600">
              <img src={galleryImg} alt="Gallery" />
                <button className="bg-secondary border-none mt-3">
                  <Link className="text-white fw-bold" to="/gallery">{t('gallery')}</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="about bg-primary padding-block-800" data-aos="fade-up">
          <div className="container">
            <div className="even-columns">
              <div className="overview grid">
                <div className="about-info text-box" data-aos="fade-right">
                  <h2 className="text-brown-200 fs-400 fw-bold">{t('about_association')}</h2>
                  <p className="fw-light pl-3 mt-3 text-white fs-200">
                    {t('about_association_desc')}
                  </p>
                </div>
                <div className="our-vision text-box" data-aos="fade-left">
                  <h2 className="text-brown-200 fs-400 fw-bold">{t('our_vision')}</h2>
                  <p className="fw-light pl-3 mt-3 text-white fs-200">
                    {t('our_vision_desc')}
                  </p>
                </div>
                <div className="our-values text-box" data-aos="fade-right">
                  <h2 className="text-brown-200 fs-400 fw-bold">{t('our_values')}</h2>
                  <div className="grid">
                    <ul className="values-list">
                      <li className="p-1">{t('values_list.transparency')}</li>
                      <li className="p-1">{t('values_list.excellence')}</li>
                      <li className="p-1">{t('values_list.creativity')}</li>
                      <li className="p-1">{t('values_list.teamwork')}</li>
                      <li className="p-1">{t('values_list.innovation_creativity')}</li>
                      <li className="p-1">{t('values_list.trust')}</li>
                      <li className="p-1">{t('values_list.leadership')}</li>
                      <li className="p-1">{t('values_list.initiative')}</li>
                      <li className="p-1">{t('values_list.respect_rights')}</li>
                      <li className="p-1">{t('values_list.shared_profitability')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="slider">
                  <ImageSlider />
                </div>
                <div className="our-goals mt-4 text-box">
                  <h2 className="text-brown-200 fs-400 fw-bold">{t('our_goals')}</h2>
                  <p className="fw-light pl-3 mt-3 text-white fs-200">
                    {t('our_goals_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners padding-block-650" data-aos="fade-up">
          <div className="container">
            <div className="even-columns items-center gap-1 m-auto">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
              <img src={partner1Img} alt="Partner 1" />
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="200">
              <img src={partner2Img} alt="Partner 2" />
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="300">
              <img src={partner3Img} alt="Partner 3" />
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="400">
              <img src={partner4Img} alt="Partner 4" />
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="500">
              <img src={partner1Img} alt="Partner 5" />
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="600">
              <img src={partner2Img} alt="Partner 6" />
              </div>
            </div>
          </div>
        </section>

        <section className="insights padding-block-800" data-aos="fade-up">
          <div className="container">
            <div className="even-columns gap-1-5">
              <div className="insights-text text-box" data-aos="fade-right">
                <h2 className="text-brown-200 fs-400 fw-bold">{t('insights')}</h2>
                <p className="fw-light pl-3 mt-3 text-white fs-200">
                  {t('insights_desc')}
                </p>
              </div>
              <div className="youtube-frame flex justify-center f-column" data-aos="fade-left">
                <h2 className="text-white fs-400 fw-bold">
                  {t('demonstration_video')}
                </h2>
                <div className="video-holder p-relative m-auto mt-4">
                  {isOverlayVisible && (
                    <>
                      <div className="overlay p-absolute">
                        <img src={overlay} alt="Overlay" className="overlay-image" />
                        <div className="dark-overlay" onClick={handleOverlayClick}></div>
                        <img className="play-icon p-absolute" src={playButtonImg} alt="Play Button" onClick={handleOverlayClick} />

                      </div>
                    </>
                  )}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-cYWAqVDL7o?si=u2DSmrqqU_atVSMm"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
