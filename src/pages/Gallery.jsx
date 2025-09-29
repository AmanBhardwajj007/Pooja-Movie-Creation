import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpdatingNewsBar from "../components/UpdatingNewsBar";
import g1 from '../images/g1.jpeg'

const videos = [
  [
    "https://www.youtube.com/embed/oOSgGF9dHPM",
    "https://www.youtube.com/embed/G7yX-0BpPGo",
    "https://www.youtube.com/embed/gAw9pZk_v4g",
  ],
  [
    "https://www.youtube.com/embed/A0OlEoVBzgU",
    "https://www.youtube.com/embed/3WR_wygiUXs",
    "https://www.youtube.com/embed/zFZGJpgjF7A",
  ],
  [
    "https://www.youtube.com/embed/tjv-Yse7h9k",
    "https://www.youtube.com/embed/vKB6mpYKWvw",
    "https://www.youtube.com/embed/NwStX1KEzdE",
  ],
  [
    "https://www.youtube.com/embed/oiGCrNjQybc",
    "https://www.youtube.com/embed/ssbZUYJjNu4",
    "https://www.youtube.com/embed/E03LEjiz0b4",
  ],
  [
    "https://www.youtube.com/embed/-nFIqgM_vlc",
    "https://www.youtube.com/embed/-CCd5FMjA6s",
    "https://www.youtube.com/embed/vIy4HgagOqI",
  ],
];

const images = Array.from({ length: 14 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => {
    const num = i * 3 + j + 1;
    return `https://www.poojamoviecreations.in/img/gallery/${num}.jpeg`;
  })
);

const VideoCard = ({ src, title }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-lg bg-black">
    <iframe
      className="h-[250px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const ImageCard = ({ src }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src={src}
      alt=""
      className="h-[300px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
);

const Gallery = () => {
  return (
    <>
    <UpdatingNewsBar/>
    <Navbar/>
    <div className="space-y-10">
      <div
        className="relative w-screen h-[100vh] flex justify-center items-center pt-[10px] bg-cover bg-center"
        style={{ backgroundImage: `url(${g1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-20 text-center px-4">
          <h1 className="hero-title text-4xl md:text-5xl font-bold italic text-white">
            Creativity, Captured in Every Campaign
          </h1>
          <p className="hero-p pt-4 text-base md:text-lg text-white">
            Explore a showcase of ad brilliance—where strategy meets stunning design in every frame.
          </p>
        </div>
      </div>

      <div className="mb-[18px]">
        <h1 className="text-[35px] font-semibold text-white italic ml-15 pl-5 border-l-4 border-[#e4d00a]">
          Our Videos
        </h1>
      </div>
      {videos.map((group, idx) => (
        <div
          key={`video-group-${idx}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {group.map((src, i) => (
            <VideoCard key={`video-${idx}-${i}`} src={src} title={`Video ${i + 1}`} />
          ))}
        </div>
      ))}

      <div className="mb-[18px]">
        <h1 className="text-[35px] font-semibold text-white italic ml-15 pl-5 border-l-4 border-[#e4d00a]">Our Images</h1>
      </div>
      {images.map((group, idx) => (
        <div
          key={`image-group-${idx}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {group.map((src, i) => (
            <ImageCard key={`image-${idx}-${i}`} src={src} />
          ))}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
