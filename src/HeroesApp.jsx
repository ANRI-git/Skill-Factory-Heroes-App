import React from "react";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";
import "animate.css";
export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
