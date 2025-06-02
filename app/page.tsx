"use client"
import { useState } from "react"

export default function WeddingWebsite() {
  const [currentPage, setCurrentPage] = useState("home")

  const guestList = [
    "Kies jou naam",
    "Anel en Danie",
    "Anita en Kobus",
    "Antoinette en Hennie",
    "Arina en Francois",
    "Belinda en Riaan",
    "Bennie en Elmarie",
    "Bernice en Deon",
    "Betsie en Fanie",
    "Brenda en Danie",
    "Carien en Danie",
    "Cecile en Hennie",
    "Chantelle en Jaco",
    "Charmaine en Kobus",
    "Christa en Pieter",
    "Christelle en Francois",
    "Daleen en Johan",
    "Danie en Elmarie",
    "Deon en Annemarie",
    "Desiree en Henk",
    "Dina en Piet",
    "Elma en Kobus",
    "Elmarie en Danie",
    "Elsa en Johan",
    "Estelle en Francois",
    "Ester en Piet",
    "Francine en Deon",
    "Gerda en Johan",
    "Hanlie en Kobus",
    "Hester en Danie",
    "Ilse en Francois",
    "Ina en Piet",
    "Ingrid en Johan",
    "Irene en Kobus",
    "Jaco en Annemarie",
    "Janine en Deon",
    "Jeanette en Francois",
    "Jolene en Piet",
    "Juanita en Johan",
    "Karen en Kobus",
    "Karien en Danie",
    "Karin en Francois",
    "Leana en Piet",
    "Leonie en Johan",
    "Liezel en Kobus",
    "Linda en Danie",
    "Lizelle en Francois",
    "Louise en Piet",
    "Magda en Johan",
    "Marelize en Kobus",
    "Margie en Danie",
    "Marie en Francois",
    "Marinda en Piet",
    "Marlene en Johan",
    "Maryke en Kobus",
    "Melanie en Danie",
    "Michelle en Francois",
    "Mieke en Piet",
    "Mona en Johan",
    "Nadine en Kobus",
    "Natasha en Danie",
    "Nicolene en Francois",
    "Petro en Piet",
    "Ria en Johan",
    "Riana en Kobus",
    "Ronel en Danie",
    "Rozanne en Francois",
    "Santie en Piet",
    "Sarie en Johan",
    "Sonja en Kobus",
    "Sunette en Danie",
    "Suretha en Francois",
    "Suzette en Piet",
    "Tania en Johan",
    "Theresa en Kobus",
    "Tina en Danie",
    "Trudie en Francois",
    "Ursula en Piet",
    "Vanessa en Johan",
    "Vicky en Kobus",
    "Wilmien en Danie",
    "Yolanda en Francois",
    "Yvonne en Piet",
  ]

  const renderHomePage = () => (
    <div className="min-h-screen relative">
      {/* Delft Blue Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/delft-wallpaper.jpeg')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "home" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Tuis
              </button>
              <button
                onClick={() => setCurrentPage("details")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "details" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Troue Besonderhede
              </button>
              <button
                onClick={() => setCurrentPage("rsvp")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "rsvp" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                RSVP
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/couple-heart-photo.png')" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: "Cinzel, serif" }}>
              U word hartlik uitgenooi na die huweliksbevestiging van
            </p>
            <h2 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: "Allura, cursive" }}>
              Roy Campbell en Hesri Hattingh
            </h2>
            <p className="text-lg md:text-xl" style={{ fontFamily: "Cinzel, serif" }}>
              30 Augustus 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDetailsPage = () => (
    <div className="min-h-screen relative">
      {/* Delft Blue Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/delft-wallpaper.jpeg')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "home" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Tuis
              </button>
              <button
                onClick={() => setCurrentPage("details")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "details" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Troue Besonderhede
              </button>
              <button
                onClick={() => setCurrentPage("rsvp")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "rsvp" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                RSVP
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1
            className="text-5xl font-bold text-center mb-16 text-blue-800"
            style={{ fontFamily: "Tangerine, cursive" }}
          >
            Troue Besonderhede
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony Details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-blue-800" style={{ fontFamily: "Cinzel, serif" }}>
                Seremonie
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: "Cinzel, serif" }}>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Datum: Saterdag, 30 Augustus 2025</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Tyd: 15:30</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <span>Plek: Lieu de Grace venue</span>
                    <br />
                    <span className="text-sm">172B College road Nooitgedacht, Krugersdorp</span>
                    <br />
                    <a
                      href="https://maps.google.com/?q=Lieu+de+Grace+venue+172B+College+road+Nooitgedacht+Krugersdorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      Kyk op Google Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg className="w-5 h-5 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>Dress code: Semi-formeel</span>
              </div>
            </div>

            {/* Reception Details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-blue-800" style={{ fontFamily: "Cinzel, serif" }}>
                Ontvangs
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: "Cinzel, serif" }}>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Onthaal sal volg na Seremonie</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <span>Plek: Lieu de Grace venue</span>
                    <br />
                    <span className="text-sm">172B College road Nooitgedacht, Krugersdorp</span>
                    <br />
                    <a
                      href="https://maps.google.com/?q=Lieu+de+Grace+venue+172B+College+road+Nooitgedacht+Krugersdorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      Kyk op Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  <span>Aandete, dans en fees!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Poem */}
          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800" style={{ fontFamily: "Cinzel, serif" }}>
              Geskenke
            </h2>
            <div className="text-center text-gray-700 leading-relaxed" style={{ fontFamily: "Cinzel, serif" }}>
              <p className="mb-4">
                Jou teenwoordigheid op ons spesiale dag
                <br />
                Is die grootste geskenk wat ons kan hê.
                <br />
                Maar as jy graag iets wil gee,
                <br />
                Sal 'n bydrae tot ons nuwe begin
                <br />
                Ons help om ons drome waar te maak.
              </p>
              <p className="text-sm italic">Kontant geskenke word met dankbaarheid ontvang.</p>
            </div>
          </div>

          {/* Accommodation */}
          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800" style={{ fontFamily: "Cinzel, serif" }}>
              Akkomodasie naby
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700" style={{ fontFamily: "Cinzel, serif" }}>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Country Park Guest House</h3>
                <p>Kontak: 079 159 0594 / 083 256 7000</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Hakunamatata</h3>
                <p>Kontak: 079 889 1909 / 079 899 1898</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Random Harvest Cottages</h3>
                <p>Kontak: 072 562 3396</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Riverstone Lodge</h3>
                <p>Kontak: 011 668 3111</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Heartly Manor</h3>
                <p>Kontak: 082 548 0916</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderRSVPPage = () => (
    <div className="min-h-screen relative">
      {/* Delft Blue Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/delft-wallpaper.jpeg')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/verlowing.jpg')" }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "home" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Tuis
              </button>
              <button
                onClick={() => setCurrentPage("details")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "details" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Troue Besonderhede
              </button>
              <button
                onClick={() => setCurrentPage("rsvp")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "rsvp" ? "bg-blue-800 text-white" : "text-blue-800 hover:bg-blue-50"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                RSVP
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h1
              className="text-5xl font-bold text-center mb-8 text-blue-800"
              style={{ fontFamily: "Tangerine, cursive" }}
            >
              RSVP
            </h1>

            <p className="text-center text-gray-700 mb-8" style={{ fontFamily: "Cinzel, serif" }}>
              Ons sien uit daarna om hierdie spesiale dag saam met jou te vier!
            </p>

            <div className="text-center">
              <a
                href="https://forms.gle/h5XKCfKYWa2Xp3jG9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Klik hier om te RSVP
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center" style={{ fontFamily: "Cinzel, serif" }}>
                <strong>Let wel:</strong> As jy 'n metgesel het, vul asseblief jou metgesel se naam en van in by die
                kommentaar gedeelte.
              </p>
            </div>

            <div className="mt-6 text-center text-gray-600" style={{ fontFamily: "Cinzel, serif" }}>
              <p className="text-sm">
                RSVP asseblief voor/op <strong>25 Julie 2025</strong>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-blue-800" style={{ fontFamily: "Allura, cursive" }}>
                #liefderoesnie
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="font-sans">
      {currentPage === "home" && renderHomePage()}
      {currentPage === "details" && renderDetailsPage()}
      {currentPage === "rsvp" && renderRSVPPage()}
    </div>
  )
}
