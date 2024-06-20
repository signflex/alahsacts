import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import notFoundImage from '../assets/images/404.png';


export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found-container">
        <section>
        <img src={notFoundImage} alt="Page not found" className="not-found-image" />
          <p className="not-found-text fs-300">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="bg-primary mt-3 text-white not-found-link">Go to Homepage</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
