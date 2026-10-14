import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importe toutes tes images
import climadaptHackathon from '../assets/events/climadapt-hackathon.jpg';
import droneCupWinners from '../assets/events/drone-cup-winners.jpg';
import droneDayPoster from '../assets/events/drone-day-poster.jpg';
import geoEducationDay from '../assets/events/geo-education-day.jpg';
import geomagPoster from '../assets/events/geomag-poster.jpg';
import gisDayPoster from '../assets/events/gis-day-poster.jpg';

const Events = () => {
  const events = [
    { src: climadaptHackathon, title: 'Climadapt Hackathon', subtitle: 'Innovation for Climate Adaptation - 04-05 Oct 2025' },
    { src: droneCupWinners, title: 'Tunisia Drone Cup', subtitle: 'Remise des Prix - Just Drone It !' },
    { src: gisDayPoster, title: 'GIS Day', subtitle: 'Geospatial & Innovation for SDGs' },
    { src: geomagPoster, title: 'Tunisia GeoAI Hack', subtitle: 'Hackathon & Conference - April 2022' },
    { src: geoEducationDay, title: 'Geo-Education Day', subtitle: 'Sup\'Com - Formation & Sensibilisation' },
    { src: droneDayPoster, title: 'Tunisia Drone Day 2022', subtitle: '11 June 2022 - Tunis Science City' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl">
          Nos Événements
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,                    // ← PLUS RAPIDE : toutes les 1,5 secondes !
          disableOnInteraction: false,
          pauseOnMouseEnter: true,        // Pause au survol
        }}
        loop={true}
        speed={500}  // Transition ultra-rapide
        className="max-w-7xl mx-auto pb-16"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="group relative">
              {/* Cadre visible autour de chaque image */}
              <div className="rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/70 group-hover:shadow-yellow-500/30 transition-all duration-500">
                <img
                  src={event.src}
                  alt={event.title}
                  className="w-full h-96 md:h-[600px] object-cover transition-transform duration-10000 group-hover:scale-110"
                />
                {/* Overlay texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl">
                      {event.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-yellow-300 font-medium drop-shadow-lg">
                      {event.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;