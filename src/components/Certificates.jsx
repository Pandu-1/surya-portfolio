import {
  AwardIcon,
  Calendar,
  ExternalLinkIcon,
  ShieldCheck,
  X,
} from "lucide-react";

import React, { useState } from "react";

import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";

const Certificates = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Devolopment",
      issuer: "Slash Mark",
      date: "March 15, 2025",
      image: certificate1,
      description: "Completed React Development Course Successfully.",
    },

    {
      id: 2,
      title: "Web Development",
      issuer: "CodSoft",
      date: "June 25,2024",
      image: certificate2,
      description: "Completed Web Development  Concepts Training.",
    },

    {
      id: 3,
      title: "Web Development",
      issuer: "Prodigy Info.Tech",
      date: "June 30, 2024",
      image: certificate3,
      description: "Completed Web Development Training Concepts.",
    },
  ];

  return (
    <>
    
      <section className="text-white py-20" id="certificates">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="mb-16">

            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
              Achievements
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Certifications.
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {certifications.map((cert) => (

              <div
                key={cert.id}
                data-aos="zoom-in"
                className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
              >

                <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">

                  <AwardIcon className="text-white" size={24} />

                </div>

                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">

                  <span className="flex items-center gap-1">

                    <ShieldCheck size={14} className="text-primary" />
                    {cert.issuer}

                  </span>

                  <span className="flex items-center gap-1">

                    <Calendar size={14} />
                    {cert.date}

                  </span>

                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {cert.description}
                </p>

                <button
                  onClick={() => {
                    setShowModal(true);
                    setSelectedCertificate(cert.image);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 cursor-pointer"
                >

                  View Certificate

                  <ExternalLinkIcon
                    size={16}
                    className="cursor-pointer"
                  />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {showModal && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="relative max-w-2xl w-full">

            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white cursor-pointer"
            >

              <X size={32} />

            </button>

            <img
              src={selectedCertificate}
              alt="certificate"
              className="w-full rounded-2xl"
            />

          </div>

        </div>

      )}

    </>
  );
};

export default Certificates;