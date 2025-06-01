import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const guestNames = [
  "Jan van Rensburg & Marli",
  "Elsabe du Toit",
  "Pieter Malan & Suné",
  "Tiaan Smit & Carla",
  "Landi Greyling",
  "Ben Muller & Mari",
  "Carel van Dyk & Chanel",
];

function IntroPage() {
  return (
    <div className="p-6 text-center">
      <img
        src="/mnt/data/ef983f09-8573-4d97-a87d-d835cd09d870.png"
        alt="Trou Uitnodiging"
        className="mx-auto mb-6 rounded shadow-md max-w-full h-auto"
      />
      <h1 className="text-4xl font-bold mb-4">Campbell Troue</h1>
      <p className="text-xl font-medium mb-2">U word hartlik uitgenooi na die huweliksbevestiging van Roy & Hesri</p>
      <p className="text-lg">Saterdag 30 Augustus</p>
    </div>
  );
}

function MapPage() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Venue & Akkommodasie</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114899.6125858604!2d27.7486319!3d-26.0301659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a779fb788e8f%3A0xf8a2a8a021cbdf91!2sLieu%20De%20Grace!5e0!3m2!1sen!2sza!4v1717176966549!5m2!1sen!2sza"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="mt-4">
        <a
          href="https://goo.gl/maps/4yEUG2BiDgM92gZo6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Lieu de Grace venue, Muldersdrift
        </a>
      </p>
    </div>
  );
}

function RSVPPage() {
  const [selectedName, setSelectedName] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
      <Card>
        <CardContent className="space-y-4 p-4">
          <Select onValueChange={setSelectedName}>
            <SelectTrigger>
              <SelectValue placeholder="Tik jou naam om uitnodiging te vind" />
            </SelectTrigger>
            <SelectContent>
              {guestNames.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="Selfoonnommer" type="tel" />
          <p className="text-sm text-gray-600">Dress code: semi-formeel</p>
          <p className="text-sm italic">
            Met jou teenwoordigheid is ons reeds geseënd,
            <br />
            maar ’n geldjie sal ons drome vir die toekoms voed.
            <br />
            ’n Klein bydra sal ons reis saam versier,
            <br />
            dankie vir die liefde wat jy met ons deel hier.
          </p>
          <p className="text-sm font-semibold">#liefderoesnie</p>
          <Button asChild className="w-full">
            <a
              href="https://forms.gle/yFh6MD3wBnp4TYV48"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stuur RSVP
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function WeddingWebsite() {
  return (
    <Router>
      <nav className="flex justify-center space-x-4 p-4 bg-pink-100 shadow">
        <Link to="/" className="text-lg font-medium">
          Tuis
        </Link>
        <Link to="/map" className="text-lg font-medium">
          Kaart
        </Link>
        <Link to="/rsvp" className="text-lg font-medium">
          RSVP
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
      </Routes>
    </Router>
  );
}
// Vercel rebuild test
