import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/About';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Soon from './components/Soon';
import Directors from './pages/Directors';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {

  return (
  <BrowserRouter>
  <I18nextProvider i18n={i18n}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Abouts />} />
      <Route path="/soon" element={<Soon />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  </I18nextProvider>
   
  </BrowserRouter>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);