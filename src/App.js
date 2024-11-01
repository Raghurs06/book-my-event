import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventDetails from "./component/EventDetails";
import EventList from "./component/EventList";
import { AuthProvider } from './context/AuthContext';
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/book-my-event" element={<HomePage />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
