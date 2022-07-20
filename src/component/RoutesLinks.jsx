import { Result } from "postcss";
import React from "react";

import { Routes, Navigate, Route } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";

function RoutesLinks() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />

        <Route exact path="/search" element={<Results />} />
        <Route exact path="/image" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />

      </Routes>
    </div>
  );
}

export default RoutesLinks;
