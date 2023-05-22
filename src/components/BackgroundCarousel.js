import React, { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";

import { Box, useMediaQuery } from "@mui/material";

const BackgroundCarousel = ({ images }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust the interval time in milliseconds (e.g., 1000 = 1 second)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? 300 : 600, // Adjust the height for mobile and desktop
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",

            top: 0,

            left: 0,

            width: "100%",

            height: "850px",

            background: `url(${image})`,

            backgroundSize: "cover",

            backgroundPosition: "center",

            opacity: index === activeIndex ? 1 : 0,

            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
    </Box>
  );
};

export default BackgroundCarousel;
