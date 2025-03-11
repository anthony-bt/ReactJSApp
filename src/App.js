import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Dashboard from './dashboard';
import Articles from './articles';
import Contact from './contact';
import ErrorPage from './error-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}