import React from "react";

const ProjectCarousel = ({
  imgs,
  imageIndex,
  currentImgUrl,
  prevImage,
  nextImage,
}) => {
  if (!imgs.length || !currentImgUrl) return null;

  return (
    <div className="my-8 w-full max-w-3xl mx-auto">
      {/* mobile */}
      <div className="md:hidden flex flex-col items-center">
        <img
          src={currentImgUrl}
          alt={`Screenshot ${imageIndex + 1}`}
          className="carousel-img"
        />
        <div className="flex space-x-4 mt-4">
          <button onClick={prevImage} className="carousel-btn-large group">
            <div className="carousel-btn-circle">
              <svg
                className="h-6 w-6 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
          <button onClick={nextImage} className="carousel-btn-large group">
            <div className="carousel-btn-circle">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex justify-center items-center space-x-8">
        <button onClick={prevImage} className="carousel-btn-large group">
          <div className="carousel-btn-circle">
            <svg
              className="h-6 w-6 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        <img
          src={currentImgUrl}
          alt={`Screenshot ${imageIndex + 1}`}
          className="carousel-img"
        />

        <button onClick={nextImage} className="carousel-btn-large group">
          <div className="carousel-btn-circle">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
