import { Box, Button, Grid, Typography } from "@mui/material";

import heroImg from "../assets/hero.png";

import ProductCatalog from "./ProductCatalog";

import NavBar from "../AdminPanel/NavBar";

import BackgroundCarousel from "./BackgroundCarousel";
import Bestow from "./Bestow";
import SoftTouch from "./SoftToch";
import Diamond from "./Diamond";

export default function Hero() {
  const carouselImages = [heroImg, heroImg, heroImg];

  return (
    <Box>
      <NavBar />
       <BackgroundCarousel images={carouselImages} />
      <Bestow />
      <SoftTouch />
      <Diamond />
    </Box>
  );
}
