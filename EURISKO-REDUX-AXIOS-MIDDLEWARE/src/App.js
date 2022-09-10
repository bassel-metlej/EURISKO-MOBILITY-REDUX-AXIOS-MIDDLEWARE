import "./App.css";
import React from "react";
import { Grid } from "@material-ui/core";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function App() {
  return (
    <Grid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Articles" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
