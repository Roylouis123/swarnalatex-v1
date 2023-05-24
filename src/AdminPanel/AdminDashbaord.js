import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ProductEdit from "./ProductEdit";
import "./App.css";
import BestowForm from "../Containers/Forms/BestowForm";
import { useEffect, useState } from "react";
import SoftTouch from "../components/SoftToch";
import DiamondForm from "../Containers/Forms/DiamondForm";
import SoftTouchForm from "../Containers/Forms/SoftTouchForm";

export default function AdminDashbaord() {
  const [form, setForm] = useState("BestowForm");

  const handleFormChange = (newForm) => {
    setForm(newForm);
  };

  const renderForm = () => {
    switch (form) {
      case "BestowForm":
        return <BestowForm />;

      case "SoftTouchForm":
        return <SoftTouchForm />;

      case "DiamondForm":
        return <DiamondForm />;

      default:
        return null;
    }
  };

  useEffect(() => {
    renderForm();
  }, [form]);

  return (
    <Box>
       
          <Grid item xs={3}>
    <Button><LogoutIcon fontSize="large" color="red"/></Button>
          </Grid>
      <Grid container  p={1}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ textAlign: "left" }}
            onClick={() => handleFormChange("BestowForm")}
          >
            <b>Bestove</b>
          </Button>
          <Button
            sx={{ textAlign: "left" }}
            onClick={() => handleFormChange("SoftTouchForm")}
          >
            <b>Soft Touch</b>
          </Button>
          <Button
            sx={{ textAlign: "left" }}
            onClick={() => handleFormChange("DiamondForm")}
          >
            <b>Dimond</b>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
      {renderForm()}
        </Grid>
      </Grid>
    </Box>
  );
}
