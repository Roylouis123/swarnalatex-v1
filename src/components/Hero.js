import { Box, Button, Grid, Typography } from "@mui/material";
import heroImg from "../assets/hero.png";
import handgloves1 from "../assets/handgloves1.png";
import BackgroundCarousel from "./BackgroundCarousel";
import Bestow from "./Bestow";
import SoftTouch from "./SoftToch";
import Diamond from "./Diamond";


export default function Hero() {
  const carouselImages = [handgloves1, heroImg];

  return (
    <>
      <BackgroundCarousel images={carouselImages} />
      <Bestow />
      <SoftTouch />
       <Diamond />
    </>
  );
}
