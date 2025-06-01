// src/WeddingWebsite.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const guestNames = ["Jan en Marie", "Elsabe du Toit", "Pieter Malan"];

function IntroPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welkom by Ons Troue</h1>
      <p className="text-lg">Ons sien uit om hierdie dag saam met julle te vier!</p>
    </div>
  );
}

function MapPage() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Venue & Akkommodasie</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3341398564716!2d27.84727827539293!3d-26.01678035771802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95700f40a1eacb%3A0x6e2cb0d8a12d032b!2sLieu%20De%20Grace!5e0!3m2!1sen!2sza!4v1717231042644!5m2!1sen!2sza"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Venue Map"
      ></iframe>
    </div>
  );
}

function RSVPPage() {
  const [selectedName, setSelectedName] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
      <select onChange={(e) => setSelectedName(e.target.value)} value={selectedName} className="w-full mb-4">
        <option value="">Kies jou naam</option>
        {guestNames.map((name, idx) => (
          <option key={idx} value={name}>
            {name}
          </option>
        ))}
      </select>
      <input type="tel" placeholder="Selfoonnommer" className="w-full mb-4" />
      <a href="https://forms.gle/yFh6MD3wBnp4TYV48" target="_blank" rel="noreferrer">
        <button className="w-full bg-pink-500 text-white py-2">Voltooi RSVP</button>
      </a>
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
