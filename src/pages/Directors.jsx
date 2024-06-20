import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Directors() {
  const { t, i18n } = useTranslation();

  const teamMembers = t("team_members", { returnObjects: true });

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#f5f5f5" }}>
        <section className=" bg-secondary p-2">
          {/* <div className="container flex justify-center">
                        <h1 className="fs-500 text-white">{t("about_us_dropdown.who_we_are")}</h1>
                    </div> */}
        </section>
        <section className="directors padding-block-650">
          <div className="container">
            <div>
              <h1>{t("our_team")}</h1>
            </div>
            <div className="even-columns">
              {teamMembers.map((member, index) => (
                <div className="column" key={index}>
                  <div className="card">
                    <div className="img-container">
                      <img src="assets/images/def-member.png" alt={`${member.name}`} />
                    </div>
                    <h3 className="t-center">{member.name}</h3>
                    <p className="t-center">{member.role}</p>
                    <div className="icons">
                      <a href={member.linkedin}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={`mailto:${member.email}`}>
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
