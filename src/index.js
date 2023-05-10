import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { Featured } from './components/Featured';
import { Signup } from './components/Signup';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Featured />
    <Signup />
    <Footer />

  </React.StrictMode>
);


