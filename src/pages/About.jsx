import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brown-200 p-2">
          <div className="container flex justify-center">
            <h1 className="fs-500 text-white">{t("about_us_dropdown.who_we_are")}</h1>
          </div>
        </section>

        <section className="association padding-block-650">
          <div className="container">
            <div className="even-columns gap-1-5">
              <div className="registre-proof bg-brown-100 p-3">
                <img className="registre-proof__img m-auto" src="assets/images/proof.png" alt="" />
                <div className="about-info text-box mt-3">

                  <h2 className="text-primary fs-400 fw-bold">{t('about_association')}</h2>
                  <p className="fw-light pl-3 mt-3 fs-200">
                    {t('about_association_desc')}
                  </p>
                </div>

              </div>
              <div className="info">
                <div className="our-vision text-box">
                  <h2 className="text-primary fs-400 fw-bold">{t('our_vision')}</h2>
                  <p className="fw-light pl-3 mt-3 fs-200">
                    {t('our_vision_desc')}
                  </p>
                </div>
                <div className="our-goals mt-4 text-box">
                  <h2 className="text-primary fs-400 fw-bold">{t('our_goals')}</h2>
                  <p className="fw-light pl-3 mt-3 fs-200">
                    {t('our_goals_desc')}
                  </p>
                </div>
                
                <div className="our-values text-box">
                  <h2 className="text-primary fs-400 fw-bold">{t('our_values')}</h2>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
