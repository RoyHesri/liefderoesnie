"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Heart, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function WeddingWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attending: "",
    comments: "",
    songRequest: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Debug logging - kyk wat gestuur word
      console.log("Sending form data:", formData)

      const formDataToSend = new FormData()

      // VERVANG HIERDIE NOMMERS MET JOU WERKLIKE ENTRY IDs
      formDataToSend.append("entry.1234567890", formData.name) // Vervang met jou werklike ID
      formDataToSend.append("entry.0987654321", formData.phone) // Vervang met jou werklike ID
      formDataToSend.append("entry.1122334455", formData.comments) // Vervang met jou werklike ID
      formDataToSend.append("entry.5544332211", formData.songRequest) // Vervang met jou werklike ID

      // Voeg bywoning status by kommentaar
      const fullComments = `Bywoning: ${formData.attending}\n\nKommentaar: ${formData.comments}`
      formDataToSend.set("entry.1122334455", fullComments)

      // Debug logging - kyk wat in FormData is
      console.log("FormData entries:")
      for (const [key, value] of formDataToSend.entries()) {
        console.log(key, value)
      }

      // VERVANG HIERDIE URL MET JOU WERKLIKE FORM ID
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfKYWa2Xp3jG9/formResponse"
      console.log("Sending to URL:", formUrl)

      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      })

      console.log("Form submitted successfully")
      setSubmitMessage("Dankie! Jou RSVP is suksesvol gestuur.")
      setFormData({ name: "", phone: "", attending: "", comments: "", songRequest: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage("Jammer, daar was 'n probleem. Probeer asseblief weer.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'Cinzel', serif" }}>
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/images/delft-wallpaper.jpeg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/verlowing.jpg"
            alt="Roy and Hesri engagement photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4 leading-tight font-light" style={{ fontFamily: "'Cinzel', serif" }}>
            U word hartlik uitgenooi na die huweliksbevestiging van
          </h1>
          <h2
            className="text-3xl md:text-5xl mb-4 text-blue-200 font-semibold"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Roy Campbell en Hesri Hattingh
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light" style={{ fontFamily: "'Cinzel', serif" }}>
            Sluit by ons aan terwyl ons ons liefdesverhaal vier
          </p>
          <a href="#rsvp">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-medium"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              RSVP Nou
            </Button>
          </a>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl text-gray-800 mb-4 font-light"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Troue Besonderhede
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl text-gray-800 mb-2 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  Wanneer
                </h3>
                <p className="text-gray-600 text-lg mb-2 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  Saterdag, 30 Augustus 2025
                </p>
                <p className="text-gray-500" style={{ fontFamily: "'Cinzel', serif" }}>
                  Seremonie om 15:30
                </p>
                <p className="text-gray-500" style={{ fontFamily: "'Cinzel', serif" }}>
                  Ontvangs om te volg
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl text-gray-800 mb-2 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  Waar
                </h3>
                <p className="text-gray-600 text-lg mb-2 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  Lieu de Grâce Venue
                </p>
                <p className="text-gray-500" style={{ fontFamily: "'Cinzel', serif" }}>
                  172B College Road
                </p>
                <p className="text-gray-500" style={{ fontFamily: "'Cinzel', serif" }}>
                  Nooitgedacht, Krugersdorp
                </p>
                <a
                  href="https://maps.google.com/search/?api=1&query=Lieu+de+Grace+Venue+172B+College+Road+Nooitgedacht+Krugersdorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 mt-4 font-medium"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Bekyk op Google Maps
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50/95 to-sky-50/95 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto shadow-lg border border-blue-200">
              <h3 className="text-2xl text-gray-800 mb-4 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                Geskenke
              </h3>
              <div className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Cinzel', serif" }}>
                <p className="mb-2">Met jou teenwoordigheid is ons reeds geseënd,</p>
                <p className="mb-2">maar 'n geldjie sal ons drome vir die toekoms voed.</p>
                <p className="mb-2">'n Klein bydra sal ons reis saam versier,</p>
                <p>dankie vir die liefde wat jy met ons deel hier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="relative py-20 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/couple-heart-photo.png" alt="Roy and Hesri couple photo" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-light" style={{ fontFamily: "'Cinzel', serif" }}>
            Sal Julle By Ons Aansluit?
          </h2>
          <p className="text-xl text-white mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
            Julle teenwoordigheid sal ons spesiale dag nog meer betekenisvol maak
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl text-gray-800 mb-6 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
              RSVP
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "'Cinzel', serif" }}
                required
              >
                <option value="">Kies jou naam uit die lys</option>
                <option value="Roy Campbell en Hesri Hattingh">Roy Campbell en Hesri Hattingh</option>
                <option value="Hetta Hattingh">Hetta Hattingh</option>
                <option value="Charlotte Campbell">Charlotte Campbell</option>
                <option value="Frans Mienie">Frans Mienie</option>
                <option value="Johan Hattingh en Ella Hattingh">Johan Hattingh en Ella Hattingh</option>
                <option value="EJ Hattingh">EJ Hattingh</option>
                <option value="Doret Du Plessis en Henning Du Plessis">Doret Du Plessis en Henning Du Plessis</option>
                <option value="Jano Du Plessis en Lindre Grobler">Jano Du Plessis en Lindre Grobler</option>
                <option value="Thys Hattingh en Irish Hattingh">Thys Hattingh en Irish Hattingh</option>
                <option value="Josh Hattingh">Josh Hattingh</option>
                <option value="MG Hattingh en Metgesel">MG Hattingh en Metgesel</option>
                <option value="Corli Hattingh">Corli Hattingh</option>
                <option value="Wian Smith en Andre Retief">Wian Smith en Andre Retief</option>
                <option value="Reinhardt Hechter en Bernadine Hechter">Reinhardt Hechter en Bernadine Hechter</option>
                <option value="Ricardo Botha en Chante Myburgh">Ricardo Botha en Chante Myburgh</option>
                <option value="Eljane Campbell en Ethan Brasington">Eljane Campbell en Ethan Brasington</option>
                <option value="Michele Clark en David Clark">Michele Clark en David Clark</option>
                <option value="Lareishka Marais en Jacque Diedericks">Lareishka Marais en Jacque Diedericks</option>
                <option value="Liani Glinister">Liani Glinister</option>
                <option value="Dominique Waterboer en Metgesel">Dominique Waterboer en Metgesel</option>
                <option value="Rohan Van der Westhuizen en Metgesel">Rohan Van der Westhuizen en Metgesel</option>
                <option value="Shaun Hepburn en Metgesel">Shaun Hepburn en Metgesel</option>
                <option value="Cobus Hattingh en Chantelle Hattingh">Cobus Hattingh en Chantelle Hattingh</option>
                <option value="Corneli Grobler">Corneli Grobler</option>
                <option value="Koos Hattingh en Engela Hattingh">Koos Hattingh en Engela Hattingh</option>
                <option value="Olivia Odendaal en Metgesel">Olivia Odendaal en Metgesel</option>
                <option value="Ansie Heinecke">Ansie Heinecke</option>
                <option value="Hettie Du Toit">Hettie Du Toit</option>
                <option value="Jacky Zeelie">Jacky Zeelie</option>
                <option value="Kittie Blaauw">Kittie Blaauw</option>
                <option value="Magriet Du Plessis">Magriet Du Plessis</option>
                <option value="Mari Greef">Mari Greef</option>
                <option value="Pieter Grobbelaar en Metgesel">Pieter Grobbelaar en Metgesel</option>
                <option value="Chaney Eichhorn en Ernst Eichhorn">Chaney Eichhorn en Ernst Eichhorn</option>
                <option value="Johanne Beyleveld en Bennie Beyleveld">Johanne Beyleveld en Bennie Beyleveld</option>
                <option value="Lorisca Victor en Calvin Victor">Lorisca Victor en Calvin Victor</option>
                <option value="Marianne Steenekamp en Jean Steenekamp">Marianne Steenekamp en Jean Steenekamp</option>
                <option value="Rhuan Van der Vyver en Kayla Smuts">Rhuan Van der Vyver en Kayla Smuts</option>
                <option value="Anchene Kriel en Andre Kriel">Anchene Kriel en Andre Kriel</option>
                <option value="Tianie Barnard en Metgesel">Tianie Barnard en Metgesel</option>
                <option value="Andre Du Plessis en Rochelle Du Plessis">Andre Du Plessis en Rochelle Du Plessis</option>
                <option value="Bailey Locker en Metgesel">Bailey Locker en Metgesel</option>
                <option value="Janco Saunders en Metgesel">Janco Saunders en Metgesel</option>
                <option value="Leon Kruger">Leon Kruger</option>
                <option value="Sunel Bezuidenhout">Sunel Bezuidenhout</option>
                <option value="Martin Forbes en Metgesel">Martin Forbes en Metgesel</option>
                <option value="Annie Brown en Ryno Brown">Annie Brown en Ryno Brown</option>
                <option value="Michael Hilton en Jolene Hilton">Michael Hilton en Jolene Hilton</option>
                <option value="Michelle Hilton">Michelle Hilton</option>
                <option value="Mari Bradshaw en Shane Bradshaw">Mari Bradshaw en Shane Bradshaw</option>
                <option value="Chivanu Botha">Chivanu Botha</option>
              </select>

              <input
                type="tel"
                placeholder="Jou Selfoon Nommer"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "'Cinzel', serif" }}
                required
              />

              <select
                value={formData.attending}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "'Cinzel', serif" }}
                required
              >
                <option value="">Sal jy bywoon?</option>
                <option value="Ja">Ja, ek sal daar wees!</option>
                <option value="Nee">Jammer, kan nie maak nie</option>
              </select>

              <textarea
                placeholder="Enige vrae of kommentaar? (Gaste met 'n metgesel, vul asseblief jou metgesel se naam en van hier in)"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                style={{ fontFamily: "'Cinzel', serif" }}
              ></textarea>

              <input
                type="text"
                placeholder="Die liedjie wat jou op die dansbaan sal kry"
                value={formData.songRequest}
                onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "'Cinzel', serif" }}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {isSubmitting ? "Stuur..." : "Stuur RSVP"}
              </Button>
            </form>

            {submitMessage && (
              <div
                className={`mt-4 p-3 rounded-lg ${submitMessage.includes("suksesvol") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/95 backdrop-blur-sm text-white py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <p className="text-lg mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            Dankie dat julle deel is van ons reis
          </p>
          <p className="text-gray-400" style={{ fontFamily: "'Cinzel', serif" }}>
            Ons kan nie wag om saam met julle te vier nie!
          </p>
        </div>
      </footer>
    </div>
  )
}
