import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

function MainContent() {
  return (
    <Routes>
      <Route path="/tracking" element={Tracking} />
      <Route path="/createPostalItems" element={CreatePostalItems} />
      <Route path="/" exact element={Home} />
      <Route
        path="/postalManagementCompleted"
        element={PostalManagementCompleted}
      />
    </Routes>
  );
}

export default MainContent;
