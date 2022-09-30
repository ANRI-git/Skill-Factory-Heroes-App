import { Navigate, Route, Routes } from 'react-router-dom';
// import { CheckingAuth } from '../auth/components/CheckingAuth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'checking') return <h1>Loading...</h1>;

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<HeroesRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

// export const AppRouter = () => {
//   return (
//     <>
//       <Routes>
//         <Route
//           path="login"
//           element={
//             <PublicRoute>
//               <LoginPage />
//             </PublicRoute>
//           }
//         />

//         <Route
//           path="/*"
//           element={
//             <PrivateRoute>
//               <HeroesRoutes />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// };
