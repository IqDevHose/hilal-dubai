import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const startImageNumber = 34; // Starting image number
  const endImageNumber = 83; // Ending image number
  const galleryImages = [];

  // Generate paths for images from 34 to 71
  for (let i = startImageNumber; i <= endImageNumber; i++) {
    const imageNumber = i.toString().padStart(4, "0"); // Pads with leading zeros (e.g., 0034)
    galleryImages.push({
      src: `/assets/IMG-20240929-WA${imageNumber}.jpg`,
    });
  }

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  // Memoized ImageCard Component
  const ImageCard = React.memo(({ image, index }) => (
    <Card
      key={index}
      className="rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out px-4 md:px-0"
      onClick={() => openModal(image.src)}
    >
      <img
        src={image.src}
        alt={`Gallery Image ${index + 1}`}
        className="rounded-lg object-cover"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        onError={(e) => {
          if (!e.target.src.endsWith("placeholder-image.jpg")) {
            e.target.src = "/assets/placeholder-image.jpg";
          }
        }}
      />
    </Card>
  ));

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Gallery</h2>

      {/* Responsive Grid for Gallery */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry gutter="30px" columnsCount={4}>
          {galleryImages.map((image, index) => (
            <ImageCard key={index} image={image} index={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal for larger image display */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-[400px] h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
