import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Destinations from "./pages/Destinations";
import Shimla from "./pages/Shimla";
import "./App.css";

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
<header className="navbar">
  <div className="logo">
  <img
    src="/images/logo.png"
    alt="Himalayan Trails Co."
    className="navbar-logo"
  />

  <div>
    <div className="logo-name">Himalayan Trails</div>
    <div className="logo-sub">Co.</div>
  </div>
</div>

        <nav>
         <Link to="/">Home</Link>
<Link to="/destinations">Destinations</Link>
          <a href="#packages">Packages</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Plan Your Trip
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
   
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">EXPLORE HIMACHAL PRADESH</span>

          <h1>
            Your Journey.
            <br />
            <span>Our Mountains.</span>
          </h1>

          <p>
            Discover the beauty of Himachal Pradesh with thoughtfully
            planned journeys, local experiences and unforgettable
            mountain adventures.
          </p>

          <div className="hero-buttons">
            <a href="#packages" className="primary-button">
              Explore Packages →
            </a>

            <a href="#destinations" className="secondary-button">
              Discover Himachal
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SHIMLA</span>
          <span>MANALI</span>
          <span>SPITI</span>
          <span>DHARAMSHALA</span>
          <span>DALHOUSIE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <span className="section-label">WHY TRAVEL WITH US</span>

        <h2>
          Experience Himachal
          <br />
          <span>Beyond the Ordinary.</span>
        </h2>

        <p>
          From peaceful Himalayan valleys to dramatic mountain roads,
          Himalayan Trails Co. creates journeys that let you experience
          Himachal at your own pace.
        </p>

        <div className="features">
          <div>
            <span className="feature-number">01</span>
            <h3>Local Expertise</h3>
            <p>
              Travel with itineraries designed around the places,
              people and experiences of Himachal.
            </p>
          </div>

          <div>
            <span className="feature-number">02</span>
            <h3>Thoughtful Journeys</h3>
            <p>
              Comfortable stays, practical routes and carefully
              planned experiences.
            </p>
          </div>

          <div>
            <span className="feature-number">03</span>
            <h3>Personal Service</h3>
            <p>
              From your first enquiry to your return home, we're here
              to help.
            </p>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations" id="destinations">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Destinations</h2>
          </div>

          <p>
            Discover some of the most beautiful destinations across
            Himachal Pradesh.
          </p>
        </div>

        <div className="destination-grid">

          <article className="destination-card shimla">
            <div>
              <span>01</span>
              <h3>Shimla</h3>
              <p>The Queen of Hills</p>
            </div>
          </article>

          <article className="destination-card manali">
            <div>
              <span>02</span>
              <h3>Manali</h3>
              <p>Mountains & Adventure</p>
            </div>
          </article>

          <article className="destination-card spiti">
            <div>
              <span>03</span>
              <h3>Spiti Valley</h3>
              <p>The Middle Land</p>
            </div>
          </article>

          <article className="destination-card dharamshala">
            <div>
              <span>04</span>
              <h3>Dharamshala</h3>
              <p>Peace in the Himalayas</p>
            </div>
          </article>

          <article className="destination-card dalhousie">
            <div>
              <span>05</span>
              <h3>Dalhousie</h3>
              <p>Colonial Charm & Nature</p>
            </div>
          </article>

          <article className="destination-card custom">
            <div>
              <span>06</span>
              <h3>Your Himachal</h3>
              <p>Tell us where you want to go</p>
            </div>
          </article>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages" id="packages">
        <div className="section-heading">
          <div>
            <span className="section-label">TRAVEL WITH US</span>
            <h2>Popular Packages</h2>
          </div>
        </div>

        <div className="package-grid">

          <article className="package-card">
            <div className="package-image package-shimla"></div>
            <div className="package-body">
              <span>4 DAYS / 3 NIGHTS</span>
              <h3>Shimla & Manali Escape</h3>
              <p>
                A perfect introduction to the mountains with scenic
                views, local experiences and comfortable stays.
              </p>
              <a href="#contact">Enquire Now →</a>
            </div>
          </article>

          <article className="package-card">
            <div className="package-image package-spiti"></div>
            <div className="package-body">
              <span>5+ DAYS</span>
              <h3>Spiti Valley Adventure</h3>
              <p>
                Explore the raw beauty, monasteries and high-altitude
                landscapes of the Spiti Valley.
              </p>
              <a href="#contact">Enquire Now →</a>
            </div>
          </article>

          <article className="package-card">
            <div className="package-image package-temple"></div>
            <div className="package-body">
              <span>CUSTOM JOURNEY</span>
              <h3>Himachal Your Way</h3>
              <p>
                Tell us your dates, interests and budget. We'll help
                create a journey around you.
              </p>
              <a href="#contact">Plan My Trip →</a>
            </div>
          </article>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-image"></div>

        <div className="about-content">
          <span className="section-label">ABOUT US</span>

          <h2>
            Born in the
            <br />
            <span>Himalayas.</span>
          </h2>

          <p>
            Himalayan Trails Co. is a Himachal-focused travel company
            created to make exploring the mountains simpler, more
            personal and more memorable.
          </p>

          <p>
            Whether you're looking for a relaxing holiday, a family
            escape, a road trip or an adventure through the high
            Himalayas, we'll help you plan it.
          </p>

          <a href="#contact" className="primary-button">
            Start Your Journey →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <span className="section-label">LET'S PLAN YOUR JOURNEY</span>

        <h2>
          The mountains
          <br />
          are calling.
        </h2>

        <p>
          Tell us where you want to go, when you want to travel and
          what kind of experience you're looking for.
        </p>

        <div className="contact-buttons">
          <a href="https://wa.me/" className="whatsapp">
            WhatsApp Us
          </a>

          <a href="mailto:info@himalayantrailco.in" className="email">
            Send an Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <div className="logo-mark">🏔</div>
          <div>
            <div className="logo-name">Himalayan Trails</div>
            <div className="logo-sub">CO.</div>
          </div>
        </div>

        <p>
          Curated journeys through Himachal Pradesh.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <Link to="/destinations">Destinations</Link>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="copyright">
          © 2026 Himalayan Trails Co. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destinations" element={<Destinations />} />
<Route path="/destinations/shimla" element={<Shimla />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;