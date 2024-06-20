import Footer from "./Footer";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import soonImage from '../assets/images/soon.png';

export default function Soon() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar />
            <main className="flex justiofy-center">
                <div className="flex justify-content items-center f-column m-auto">
                    <img src={soonImage} alt="" />
                    <p className="fw-light text-primary fw-bold fs-300 pl-3 mt-3">
                        {t("soon")}
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
