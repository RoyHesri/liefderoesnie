import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function IntroPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welkom by Ons Troue</h1>
      <p>Ons is baie opgewonde om hierdie spesiale dag saam met julle te vier!</p>
    </div>
  );
}

function MapPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Venue & Akkommodasie</h2>
      <p><a href="https://maps.google.com" target="_blank">Kaart na Lieu de Grace</a></p>
    </div>
  );
}

function RSVPPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>RSVP</h2>
      <p>Laat weet ons asseblief of jy gaan bywoon.</p>
    </div>
  );
}

export default function WeddingWebsite() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#fce4ec", display: "flex", gap: "1rem", justifyContent: "center" }}>
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
