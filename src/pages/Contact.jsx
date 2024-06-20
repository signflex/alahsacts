import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert';
import 'leaflet/dist/leaflet.css'; 

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = [35.1754623, -2.9279173];

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_8a2860l', 'template_ly6c478', e.target, 'IFTW-aHJdDSK9p6tJ') 
         .then((result) => {
          console.log(result.text);
          Swal({
            title: t('email_sent_successfully'),
            icon: 'success',
            button: 'OK',
          });
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          Swal({
            title: t('email_send_error'),
            icon: 'error',
            button: 'OK',
          });
          setLoading(false);
      });

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brown-200 p-2">
          <div className="container flex justify-center">
            <h1 className="fs-500 text-white">{t('contact')}</h1>
          </div>
        </section>
        <section className='contact padding-block-800'>
          <div className="container">
            <div className="even-columns gap-1-5">
              <div className="column">
                <p className='text-primary'>{t('dont_hesitate')}</p>
                <form onSubmit={sendEmail}>
                  <label htmlFor="name">{t('name')}:</label>
                  <input type="text" id="name" name="name" required />

                  <label htmlFor="email">{t('email')}:</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="message">{t('message')}:</label>
                  <textarea id="message" name="message" required></textarea>

                  <button className='bg-primary flex gap-1 justify-center' type="submit" disabled={loading}>
                    {loading && <span className="spinner"></span>}
                    {loading ? t('sending') : t('send')}
                  </button>
                </form>
              </div>

              <div className="column">
                <MapContainer center={center} zoom={13} style={containerStyle}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
