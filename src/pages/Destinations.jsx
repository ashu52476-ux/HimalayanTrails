import { Link } from "react-router-dom";
function Destinations() {
  const destinations = [
    {
      name: "Shimla",
      subtitle: "The Queen of Hills",
      description:
        "Discover colonial charm, mountain views, peaceful walks and the timeless beauty of Shimla.",
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Manali",
      subtitle: "Mountains & Adventure",
      description:
        "From rivers and forests to snow-covered peaks, experience the adventure and beauty of Manali.",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Spiti Valley",
      subtitle: "The Middle Land",
      description:
        "Journey through dramatic landscapes, ancient monasteries and the unique culture of Spiti.",
      image:
        "https://images.unsplash.com/photo-1626014303757-7b3c2b5e8f9c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Dharamshala",
      subtitle: "Peace in the Himalayas",
      description:
        "Explore Tibetan culture, mountain villages, monasteries and the stunning Dhauladhar range.",
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Dalhousie",
      subtitle: "Colonial Charm & Nature",
      description:
        "Enjoy peaceful valleys, pine forests, old-world architecture and beautiful mountain trails.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Kinnaur",
      subtitle: "Land of Apples & Mountains",
      description:
        "Experience high Himalayan landscapes, apple orchards, rivers and traditional mountain villages.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Kasol",
      subtitle: "Valleys, Rivers & Cafés",
      description:
        "A relaxed Himalayan escape surrounded by forests, rivers, villages and beautiful trails.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Chamba",
      subtitle: "Culture & Mountain Heritage",
      description:
        "Discover ancient temples, traditional culture, peaceful valleys and the charm of old Himachal.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <div className="destinations-page">
  <header className="navbar">
  <div className="logo">
    <img
  src="/images/logo.png"
  alt="Himalayan Trails Co."
  className="navbar-logo"
/>
    <div>
      <div className="logo-name">Himalayan Trails</div>
      <div className="logo-sub">CO.</div>
    </div>
  </div>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/destinations">Destinations</Link>
    <Link to="/#packages">Packages</Link>
    <Link to="/#about">About Us</Link>
    <Link to="/#contact">Contact</Link>
  </nav>

  <Link className="nav-cta" to="/#contact">
    Plan Your Trip
  </Link>
</header>
      <section className="destinations-hero">
        <div className="destinations-hero-overlay"></div>

        <div className="destinations-hero-content">
          <span>EXPLORE HIMACHAL PRADESH</span>
          <h1>Places Worth<br />Remembering.</h1>
          <p>
            From peaceful hill stations to remote Himalayan valleys,
            discover the places that make Himachal unforgettable.
          </p>
        </div>
      </section>

      <section className="destinations-list">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR DESTINATIONS</span>
            <h2>Discover Himachal</h2>
          </div>

          <p>
            Choose your destination and let us help you plan the journey.
          </p>
        </div>

        <div className="destinations-page-grid">
          {destinations.map((destination, index) => (
            <article
              className="destination-large-card"
              key={destination.name}
            >
              <div
                className="destination-large-image"
                style={{
                  backgroundImage: `url("${destination.image}")`,
                }}
              >
                <span className="destination-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="destination-large-content">
                <span>{destination.subtitle}</span>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                {destination.name === "Shimla" ? (
  <Link to="/destinations/shimla">Explore Shimla →</Link>
) : (
  <a href="#contact">Plan This Trip →</a>
)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-cta">
        <span>CAN'T DECIDE?</span>
        <h2>Tell us where you want to go.</h2>
        <p>
          Share your dates, budget and preferences. We'll help you
          create a Himachal trip around you.
        </p>
        <a href="#contact">Plan My Trip →</a>
      </section>
    </div>
  );
}

export default Destinations;