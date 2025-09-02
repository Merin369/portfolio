import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [concertIndex, setConcertIndex] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const concertImages = [
    "/concert8.png",
    "/concert2.png",
    "/concert3.png",
    "/concert4.png",
    "/concert5.png",
    "/concert6.png",
    "/concert7.png",
  ];

  const portfolioImages = [
    "/concert1.png",
    "/concert9.png",
    "/concert10.png",
    "/concert11.png",
  ];

  const nextImage = (setIndex, images, index) => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = (setIndex, images, index) => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      {/* 🎶 Booking Concert App */}
      <div className="project-card">
        <h3>🎶 Booking Concert App</h3>
        <p>
          A full-stack MERN app for booking concert tickets with seat
          reservations, QR code tickets, and Stripe payments.
        </p>

        {/* 3D Carousel */}
        <div className="carousel-container">
          <button
            className="scroll-btn left"
            onClick={() =>
              prevImage(setConcertIndex, concertImages, concertIndex)
            }
          >
            ◀
          </button>
          <div className="carousel">
            {concertImages.map((img, i) => {
              const offset =
                (i - concertIndex + concertImages.length) %
                concertImages.length;
              return (
                <img
                  key={i}
                  src={img}
                  alt={`Concert ${i}`}
                  className={`carousel-img offset-${offset}`}
                />
              );
            })}
          </div>
          <button
            className="scroll-btn right"
            onClick={() =>
              nextImage(setConcertIndex, concertImages, concertIndex)
            }
          >
            ▶
          </button>
        </div>
      </div>

      {/* 💻 Portfolio Website */}
      <div className="project-card">
        <h3>💻 Portfolio Website</h3>
        <p>
          A personal portfolio showcasing my skills, projects, and resume
          download with smooth animations and a modern UI.
        </p>

        {/* 3D Carousel */}
        <div className="carousel-container">
          <button
            className="scroll-btn left"
            onClick={() =>
              prevImage(setPortfolioIndex, portfolioImages, portfolioIndex)
            }
          >
            ◀
          </button>
          <div className="carousel">
            {portfolioImages.map((img, i) => {
              const offset =
                (i - portfolioIndex + portfolioImages.length) %
                portfolioImages.length;
              return (
                <img
                  key={i}
                  src={img}
                  alt={`Portfolio ${i}`}
                  className={`carousel-img offset-${offset}`}
                />
              );
            })}
          </div>
          <button
            className="scroll-btn right"
            onClick={() =>
              nextImage(setPortfolioIndex, portfolioImages, portfolioIndex)
            }
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
