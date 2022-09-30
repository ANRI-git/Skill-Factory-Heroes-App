import React from 'react';
import { AppRouter } from './router/AppRouter';
import 'animate.css';
import { AuthErrorAlert } from './auth/components/AuthErrorAlert';
export const HeroesApp = () => {
  return (
    <>
      <AppRouter />
      <AuthErrorAlert />
    </>
  );
};
