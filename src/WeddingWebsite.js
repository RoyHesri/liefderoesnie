// src/WeddingWebsite.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function IntroPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welkom by Ons Troue</h1>
      <p className="text-lg">Ons is baie opgewonde om hierdie spesiale dag saam met julle te vier!</p>
    </div>
  );
}

function MapPage() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Venue & Akkommodasie</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.171675171232!2d27.82159931504337!3d-26.031431483512134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a2bce79fc9a3%3A0x2e4fc5dfb9a6c3e!2sLieu%20De%20Grace!5e0!3m2!1sen!2sza!4v1717238706305!5m2!1sen!2sza"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Venue"
      ></iframe>
      <p className="mt-4">
        <a href="https://goo.gl/maps/2KDRYYeTvsDjNoUz6" target="_blank" rel="noopener noreferrer">
          Lieu de Grace, Muldersdrift – Klik hier vir kaart
        </a>
      </p>
    </div>
  );
}

function RSVPPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
      <input
        type="text"
        placeholder="Tik jou naam"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="tel"
        placeholder="Selfoonnommer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <p className="mb-2">Dress code: <strong>semi-formeel</strong></p>
      <p className="text-sm italic mb-4">
        Met jou teenwoordigheid is ons reeds geseënd, <br />
        maar ’n geldjie sal ons drome vir die toekoms voed. <br />
        ’n Klein bydra sal ons reis saam versier, <br />
        dankie vir die liefde wat jy met ons deel hier.
      </p>
      <a
        href="https://forms.gle/yFh6MD3wBnp4TYV48"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white px-4 py-2 rounded block text-center"
      >
        Voltooi RSVP
      </a>
      <p className="mt-4 text-sm">#liefderoesnie</p>
    </div>
  );
}

export default function WeddingWebsite() {
  return (
    <Router>
      <nav className="flex justify-center space-x-4 p-4 bg-pink-100 shadow">
        <Link to="/">Tuis</Link>
        <Link to="/map">Kaart</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
      </Routes>
    </Router>
  );
}