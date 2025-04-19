import React from 'react';
import { FaGooglePlay, FaAppStoreIos, FaShieldAlt, FaUsers, FaWallet, FaMobileAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './App.css';

const App = () => {
  return (
    <div className="app">

      {/* Hero Section */}
      <section className="hero">
        <h1>Lend-It. Rent-It. Trust-Us.</h1>
        <p>
          Lendit helps you rent and lend items safely, with secure payments and trusted users in your area.
        </p>
        <button className="hero-button">
          Get Started <FiArrowRight />
        </button>
        <img src="/Screenshot_20250419_202633_com.lendit.jpg" alt="App Screenshot" />
      </section>

      {/* Problem + Solution */}
      <section className="section problem-solution">
        <h2>Why Lendit?</h2>
        <p>
          Renting items is often expensive, risky, or simply inconvenient. Lendit changes that by letting you find and lend items nearby with full control and transparency.
        </p>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <h2>How It Works</h2>
        <div className="grid grid-4">
          {["Find Item", "Request Rental", "Pay Securely", "Return & Review"].map((step, i) => (
            <div key={i} className="card">
              <h3>Step {i + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <h2>Features</h2>
        <div className="grid grid-4">
          {[
            { icon: <FaShieldAlt className="card-icon" />, title: "Secure Payments" },
            { icon: <FaUsers className="card-icon" />, title: "Peer-to-Peer Rentals" },
            { icon: <FaWallet className="card-icon" />, title: "Direct Deposits" },
            { icon: <FaMobileAlt className="card-icon" />, title: "In-app Tracking" },
          ].map((feat, i) => (
            <div key={i} className="card">
              {feat.icon}
              <h3>{feat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <h2>What Our Users Say</h2>
        <div className="grid grid-3">
          {[
            "It’s the easiest rental app I’ve used!",
            "I trust Lendit to manage deposits safely.",
            "I now make money from things I wasn’t using!",
          ].map((quote, i) => (
            <div key={i} className="card testimonial">
              “{quote}”
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="section download-cta">
        <h2>Get the App</h2>
        <p>Download Lendit on your favorite app store.</p>
        <div className="download-buttons">
          <a href="#" className="download-button">
            <FaGooglePlay /> Google Play
          </a>
          <a href="#" className="download-button">
            <FaAppStoreIos /> App Store
          </a>
        </div>
        {/* Optional QR Code */}
        <img src="/qr-code.png" alt="QR Code" />
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div>
            <h4>Lendit</h4>
            <p>Your trusted rental companion.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
