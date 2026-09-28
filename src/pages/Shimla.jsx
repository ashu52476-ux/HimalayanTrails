import { Link } from "react-router-dom";

function Shimla() {
  const sightseeing = [
  {
    name: "The Ridge & Christ Church",
    description:
      "The heart of Shimla, The Ridge offers beautiful mountain views and is home to the iconic Christ Church, one of the city's best-known heritage landmarks.",
   image: "/images/shimla/christ-church.png",
  },
  {
    name: "Mall Road",
    description:
      "Shimla's famous pedestrian shopping street, filled with cafés, restaurants, local handicrafts, woollens and the classic hill-station atmosphere.",
  image: "/images/shimla/mall-road.png",
  },
  {
  name: "Jakhoo Temple & Hanuman Statue",
  description:
    "Located on Jakhoo Hill, this famous temple is associated with Lord Hanuman and is known for its striking Hanuman statue and beautiful Himalayan surroundings.",
  image: "/images/shimla/jakhoo.png",
},
  {
    name: "Viceregal Lodge",
    description:
      "A remarkable colonial-era building that now houses the Indian Institute of Advanced Study and forms an important part of Shimla's heritage.",
   image: "/images/shimla/lodge.png",
  },
  {
  name: "Kufri",
  description:
    "A popular mountain excursion near Shimla known for Himalayan scenery, nature experiences and winter activities.",
  image: "/images/shimla/kufri.png",
},
  {
    name: "Naldehra & Mashobra",
    description:
      "Peaceful escapes surrounded by forests and mountain landscapes, ideal for travellers looking beyond the busy city centre.",
    image: "/images/shimla/naldehra.png",
  },
];

  const foods = [
    "Siddu",
    "Babru",
    "Himachali Dham",
    "Madra",
    "Momos",
    "Thukpa",
  ];

  return (
    <div className="shimla-page">

      {/* NAVBAR */}
      <header className="navbar">
        <Link to="/" className="logo">
          <div className="logo-mark">🏔️</div>
          <div>
            <div className="logo-name">Himalayan Trails</div>
            <div className="logo-sub">CO.</div>
          </div>
        </Link>

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

      {/* HERO */}
     <section className="shimla-hero">
  <video
    className="shimla-hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/shimla-hero.mp4" type="video/mp4" />
  </video>
        <div className="shimla-hero-overlay"></div>

        <div className="shimla-hero-content">
          <span>HIMACHAL PRADESH · SHIMLA</span>

          <h1>
            The Queen
            <br />
            of Hills.
          </h1>

          <p>
            Discover colonial charm, Himalayan views, peaceful forests,
            local culture and unforgettable mountain experiences.
          </p>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="shimla-intro">
        <div className="shimla-intro-text">
          <span className="section-label">ABOUT SHIMLA</span>

          <h2>A mountain city with a story to tell.</h2>

          <p>
            Shimla is the capital of Himachal Pradesh and one of India's
            best-known hill stations. Surrounded by cedar, pine and oak
            forests, the city combines Himalayan scenery with remarkable
            colonial-era architecture.
          </p>

          <p>
            From the historic Ridge and Mall Road to peaceful viewpoints,
            temples and nearby mountain escapes, Shimla offers a mix of
            sightseeing, relaxation, culture and adventure.
          </p>
        </div>

        <div className="shimla-facts">
          <div>
            <span>KNOWN FOR</span>
            <strong>Heritage & Mountains</strong>
          </div>

          <div>
            <span>IDEAL STAY</span>
            <strong>2–4 Days</strong>
          </div>

          <div>
            <span>EXPERIENCE</span>
            <strong>Relax · Explore · Discover</strong>
          </div>
        </div>
      </section>

      {/* SIGHTSEEING */}
      <section className="shimla-sightseeing">
        <div className="section-heading">
          <div>
            <span className="section-label">PLACES TO VISIT</span>
            <h2>Popular Sightseeing</h2>
          </div>

          <p>
            Explore Shimla's famous landmarks, heritage buildings,
            temples and scenic mountain escapes.
          </p>
        </div>

        <div className="shimla-sightseeing-grid">
          {sightseeing.map((place, index) => (
            <article className="shimla-place-card" key={place.name}>
              <div
                className="shimla-place-image"
                style={{
                  backgroundImage: `url("${place.image}")`,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="shimla-place-content">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="shimla-experiences">
        <div className="shimla-experience-content">
          <span className="section-label">MORE THAN SIGHTSEEING</span>

          <h2>Experience Shimla your way.</h2>

          <div className="experience-list">
            <div>
              <strong>01</strong>
              <span>Walk through The Ridge & Mall Road</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Explore Shimla's colonial heritage</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Enjoy Himalayan viewpoints & nature walks</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Take a day trip towards Kufri, Fagu or Naldehra</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Shop for local handicrafts and woollens</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="shimla-food">
        <div className="food-intro">
          <span className="section-label">TASTE HIMACHAL</span>

          <h2>Don't leave Shimla without trying the local flavours.</h2>

          <p>
            Himachali cuisine is deeply connected with the region's
            traditions and mountain lifestyle. Shimla is also known for
            popular street foods such as momos and local favourites such
            as Siddu and Babru.
          </p>
        </div>

        <div className="food-grid">
          {foods.map((food, index) => (
            <div className="food-card" key={food}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{food}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL INFO */}
      <section className="shimla-info">
        <div>
          <span className="section-label">PLAN YOUR VISIT</span>
          <h2>Everything you need to know.</h2>
        </div>

        <div className="shimla-info-grid">
          <div className="info-card">
            <span>BEST TIME</span>
            <h3>March – June</h3>
            <p>
              Pleasant weather makes spring and summer popular for
              sightseeing and exploring the surrounding hills.
            </p>
          </div>

          <div className="info-card">
            <span>MONSOON</span>
            <h3>July – September</h3>
            <p>
              The hills become lush and green, although travellers should
              plan around changing mountain weather.
            </p>
          </div>

          <div className="info-card">
            <span>WINTER</span>
            <h3>October – February</h3>
            <p>
              Cooler temperatures and the possibility of snow make winter
              a popular choice for a different Shimla experience.
            </p>
          </div>

          <div className="info-card">
            <span>HOW TO REACH</span>
            <h3>Road · Rail · Air</h3>
            <p>
              Shimla can be reached by road, the historic Kalka–Shimla
              railway and flights to Jubbarhatti Airport.
            </p>
          </div>
        </div>
      </section>

      {/* SAMPLE ITINERARY */}
      <section className="shimla-itinerary">
        <div>
          <span className="section-label">A SIMPLE PLAN</span>
          <h2>3 Days in Shimla</h2>
        </div>

        <div className="itinerary-days">
          <div>
            <span>DAY 01</span>
            <h3>Shimla Heritage</h3>
            <p>
              The Ridge · Christ Church · Mall Road · Lakkar Bazaar
            </p>
          </div>

          <div>
            <span>DAY 02</span>
            <h3>Mountains & Temples</h3>
            <p>
              Jakhoo Temple · Kufri · Himalayan viewpoints · Local cafés
            </p>
          </div>

          <div>
            <span>DAY 03</span>
            <h3>Beyond the City</h3>
            <p>
              Naldehra · Mashobra · scenic drives · local experiences
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="shimla-cta">
        <span>READY FOR THE MOUNTAINS?</span>

        <h2>Let's plan your Shimla journey.</h2>

        <p>
          Tell us your travel dates, number of travellers and what kind of
          experience you're looking for.
        </p>

        <Link to="/#contact">
          Plan My Shimla Trip →
        </Link>
      </section>

    </div>
  );
}

export default Shimla;