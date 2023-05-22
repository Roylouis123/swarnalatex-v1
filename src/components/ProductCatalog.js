import { Grid, Button, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import img from "../assets/hero.png";

export default function ProductCatalog() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0" }}>
      <Box>
        <Typography py={4} variant="h2" sx={{ textAlign: "center" }}>
          Available Brands
        </Typography>
      </Box>
      <Grid
        container
        p={1}
        md={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Grid
          item
          md={8}
          p={2}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "orange",
          }}
        >
          <Box>
            <Typography variant="h3" mb={2} color="white">
              Bestow
            </Typography>
            <Typography varient="p" mb={2} color="white">
              Paragraphs are medium-sized units of writing, longer than
              sentences, but shorter than sections, chapters, or entire works.
              Because they connect the “small” ideas of individual sentences to
              a “bigger” idea, paragraph structure is essential to any writing
              for organization, flow, and comprehension.{" "}
            </Typography>
            <Typography variant="p" mb={2} color="white">
              Available varents : SL-40, SL-60
            </Typography>
            <Typography varient="p" mb={2} color="white">
              Available Colors: Blue, Black
            </Typography>
            <Button variant="outlined" mb={2}>
              <Link to="/Product" sx={{ color: "white" }}>
                View Product
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item md={4}>
          <img style={{ width: "100%" }} src={img} alt="Hero" />
        </Grid>
      </Grid>
      <Grid
        container
        p={1}
        md={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Grid
          item
          md={8}
          p={2}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#4b7c21",
          }}
        >
          <Box>
            <Typography variant="h3" mb={2} color="white">
              SoftTouch
            </Typography>
            <Typography varient="p" mb={2} color="white">
              Paragraphs are medium-sized units of writing, longer than
              sentences, but shorter than sections, chapters, or entire works.
              Because they connect the “small” ideas of individual sentences to
              a “bigger” idea, paragraph structure is essential to any writing
              for organization, flow, and comprehension.{" "}
            </Typography>
            <Typography variant="p" mb={2} color="white">
              Available varents : SL-40, SL-60
            </Typography>
            <Typography varient="p" mb={2} color="white">
              Available Colors : Blue, Black
            </Typography>
            <Button variant="outlined" mb={2}>
              View Products
            </Button>
          </Box>
        </Grid>
        <Grid item md={4}>
          <img style={{ width: "100%" }} src={img} alt="Hero" />
        </Grid>
      </Grid>
    </Box>
  );
}
