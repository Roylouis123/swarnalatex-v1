import { Box, Button, Grid, Typography } from "@mui/material";
import heroImg from "../assets/hero.png";
import handgloves from "../assets/handgloves.png";
import BackgroundCarousel from "./BackgroundCarousel";
import Bestow from "./Bestow";
import SoftTouch from "./SoftToch";
import Diamond from "./Diamond";


export default function Hero() {
  const carouselImages = [handgloves, heroImg];

  return (
    <>
      <BackgroundCarousel images={carouselImages} />
      <Bestow />
      <SoftTouch />
       <Diamond />
    </>
  );
}
