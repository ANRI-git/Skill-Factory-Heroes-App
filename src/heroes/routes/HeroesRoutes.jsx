import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { HeroProvider } from "../context/HeroProvider";
import { HeroByPublisherPage } from "../pages/HeroByPublisherPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroProvider>
          <Routes>
            {/* <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} /> */}
            <Route path="heroes" element={<HeroByPublisherPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/heroes" />} />
          </Routes>
        </HeroProvider>
      </div>
    </>
  );
};
