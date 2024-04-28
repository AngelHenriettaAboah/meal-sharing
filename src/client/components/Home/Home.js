import React from "react";
import { HomePageComponent } from "./HomePageComponent";
import { Link } from "react-router-dom";
import "./home.css";
import image4 from "./image4.jpg"; // Imported images
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image9 from "./image9.jpg";
import image7 from "./image7.jpg";
import image2 from "./image2.jpg";
import image12 from "./image12.jpg";
import image16 from "./image16.jpg";
import image15 from "./image15.jpg";

export function Home() {
  const isSmooth = "true";
  return (
    <div className="full-screen">
      {/* Descriptive Page Section */}
      <section
        className="section"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/AngelHenriettaAboah/meal-sharing/react1-week3/angel/src/client/components/Home/image17.jpg')",
        }}
      >
        <div className="container">
          <p className="text-home-page">
            Welcome to our meal sharing Community! From homemade favorites to
            exotic cuisines, connect with local chefs and fellow food
            enthusiasts to share tasty continental meals and unforgettable
            dining experiences.
          </p>
          {/* Call to Action */}
          <section className="cta">
            <div className="container">
              <HomePageComponent />
              {/* Link to scroll to the feature meals section */}
              <Link to="/menu" smooth={isSmooth} duration={500}>
                <button className="book-meal">Our Menu</button>
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* Card Section */}
      <section className="section" style={{ backgroundColor: "#0c346d" }}>
        <div className="container">
          <div id="feature-meals">
            <h2 style={{ color: "#f8f4f3" }}>Featured Meals</h2>
            <div className="card-container">
              {/* Card 1 */}
              <div className="card">
                <img
                  src={image4}
                  alt="Meal 1"
                  className="meal-image"
                  style={{
                    width: "400px",
                    height: "400px",
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="meal-info">
                  <h3>Jollof Rice</h3>
                  <p>
                    Jollof rice is a beloved West African dish with many
                    regional variations. It's made with a unique blend of
                    spices, long-grain rice, and a tomato and red pepper base.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/meals/12" smooth={isSmooth} duration={500}>
                      <button className="book-meal">Order Meal</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div
                className="card"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "grid",
                }}
              >
                <img
                  src={image5}
                  alt="Meal 1"
                  className="meal-image"
                  style={{
                    width: "400px",
                    height: "400px",
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="meal-info">
                  <h3>Paella</h3>
                  <p>
                    Paella, a dish of saffron-flavoured rice cooked with meats,
                    seafood, and vegetables-the dish is especially associated
                    with the region of Valencia.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/meals/21" smooth={isSmooth} duration={500}>
                      <button className="book-meal">Order Meal</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={image6}
                  alt="Meal 1"
                  className="meal-image"
                  style={{
                    width: "400px",
                    height: "400px",
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div
                  className="meal-info"
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    display: "grid",
                    gridTemplateRows: "auto 1fr 50px",
                    position: "grid",
                  }}
                >
                  <h3>Sushi</h3>
                  <p>
                    Sushi is a Japanese dish that features medium-grained rice
                    cooked in vinegar, served with raw or cooked seafood and a
                    variety of toppings or fillings.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/meals/8" smooth={isSmooth} duration={500}>
                      <button className="book-meal">Order Meal</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section
        className="section"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/AngelHenriettaAboah/meal-sharing/react1-week3/angel/src/client/components/Home/image0.jpg')",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#f8f4f3" }}>Meet our World Class Chefs</h2>

          <div className="card-container">
            {/* Card 1 */}
            <div
              className="card"
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "grid",
                gridTemplateRows: "auto 1fr 50px",
                position: "relative",
              }}
            >
              <img
                src={image7}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div className="meal-info">
                <h3>Spain</h3>
                <p>
                  Embark on a culinary journey through Europe with our talented
                  chef, from classic European delicacies to innovative fusion
                  dishes, savor the best of both worlds in every bite, crafted
                  with passion and expertise."
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="card">
              <img
                src={image9}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                className="meal-info"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "relative",
                }}
              >
                <h3>Liberia</h3>
                <p>
                  Indulge in the soulful flavors of West Africa, with our
                  esteemed chef hailing from Liberia and the rest of West
                  Africa.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={image2}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                className="meal-info"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "relative",
                }}
              >
                <h3>Japan</h3>
                <p>
                  Delight in the refined flavors and masterful artistry of our
                  Asian including Japanese cuisines, expertly crafted with
                  dedication and attention to detail to offer an unparalleled
                  dining journey that embodies the spirit of the Far East.
                </p>
              </div>
            </div>
            <p
              style={{
                color: "#ddd1bb",
                backgroundColor: "#ea4625",
                padding: "20px",
              }}
            >
              Experience the culinary mastery of our featured chefs, each
              bringing a unique blend of flavors and expertise to the table.
              From seasoned professionals to rising stars, our chefs are
              dedicated to crafting memorable dining experiences that delight
              the senses and tantalize the taste buds. Join us on a gastronomic
              adventure as we celebrate the artistry and passion of these
              culinary artisans.
              <Link to="/blog">
                <button className="book-meal">Learn More</button>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Another Section */}
      <section className="section" style={{ backgroundColor: "#6b1616" }}>
        <div className="container">
          <h2 style={{ color: "#f8f4f3" }}>
            Famous Places For our Food Lovers
          </h2>

          <div className="card-container">
            {/* Card 1 */}
            <div className="card">
              <img
                src={image16}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                className="meal-info"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "relative",
                }}
              >
                <h3>Boulevard Palace Restaurant & Bar</h3>
                <p>
                  This vibrant restaurant is situated in the tropical region of
                  Liberia, West africa and famous for its varieties continental
                  african dishes.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="card">
              <img
                src={image12}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                className="meal-info"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "relative",
                }}
              >
                <h3>Zen Sushi Restaurant</h3>
                <p>
                  Zen Sushi was the first Japanese restaurant to bring in Italy
                  the Kaiten, the particular conveyor belt to serve freshly
                  prepared sushi on colored saucers indicating prices.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={image15}
                alt="Meal 1"
                className="meal-image"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                className="meal-info"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateRows: "auto 1fr 50px",
                  position: "relative",
                }}
              >
                <h3>Rosi La Loca</h3>
                <p>
                  Immerse yourself in the vibrant ambiance of Rosi La Loca,
                  where passion for food and culture collide. Nestled in the
                  heart of Madrid, our restaurant captures the essence of
                  Spanish cuisine with a modern twist.
                </p>
              </div>
            </div>
            <p
              style={{
                backgroundColor: "#0c346d",
                color: "#ddd1bb",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              Explore the culinary wonders of Asia, Europe, and Africa at our
              renowned food destinations. From the bustling streets of Tokyo to
              the charming cafes of Paris and the vibrant markets of Marrakech,
              each location offers a unique gastronomic experience. Indulge in
              flavorful street food, savor exquisite fine dining, and discover
              the rich tapestry of global cuisines. Embark on a journey of taste
              and culture as you explore these iconic food destinations, where
              every dish tells a story and every bite is a delight for the
              senses.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="section"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/AngelHenriettaAboah/meal-sharing/react1-week3/angel/src/client/components/Home/image13.jpg')",
          color: "white",
        }}
      >
        <div className="container">
          <h2
            style={{
              backgroundColor: "#8e7934",
              width: "fit-content",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            About Us
          </h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://raw.githubusercontent.com/AngelHenriettaAboah/meal-sharing/react1-week3/angel/src/client/components/Home/image18.jpg"
                alt="About Us Image"
              />
            </div>
            <div className="about-text">
              <p>
                Our meal sharing app is designed to bring people together
                through the love of food. Whether you're a passionate home cook
                or an adventurous foodie, our platform provides a space for you
                to connect, share, and discover delicious meals from around the
                world.
              </p>

              <p>
                Our mission is to revolutionize the way people experience food
                by creating a platform that fosters connections, celebrates
                culinary diversity, and promotes sustainable dining practices.
              </p>

              <p>
                Whether you're a seasoned chef, a curious foodie, or someone who
                simply enjoys good company and great food, our app provides a
                welcoming space for you to share your passion for cooking,
                explore new flavors, and connect with like-minded individuals.
              </p>
              <p>
                From intimate home-cooked meals to vibrant community gatherings,
                our platform empowers hosts to showcase their culinary talents
                and create memorable dining experiences for guests from all
                walks of life.
              </p>
              <p>
                Join us in our mission to bring people together through the
                universal language of food. Together, let's build a community
                where everyone has a seat at the table and every meal is an
                opportunity for connection and celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" style={{ backgroundColor: "#332002" }}>
        <div className="container">
          <h2 style={{ color: "white" }}>Meet Our Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              <img
                src="https://raw.githubusercontent.com/AngelHenriettaAboah/meal-sharing/react1-week3/angel/src/client/components/Home/image19.jpg"
                alt="Founder Image"
              />
            </div>
            <div className="founder-text">
              <p>
                Angel Henrietta Aboah is a food enthusiast, computer engineer,
                and frontend developer based in Denmark. Originally from
                Liberia, Angel has always had a passion for exploring different
                cuisines and sharing her love for food with others.
              </p>
              <p>
                Driven by her dual passions for technology and gastronomy, Angel
                Henrietta founded our meal sharing platform with the vision of
                creating a vibrant community where people from all walks of life
                can come together to discover, share, and celebrate their love
                for food.
              </p>
              <p>
                With her background in software development and a keen interest
                in culinary arts, she brings a unique perspective to the table,
                combining innovation with a deep appreciation for tradition and
                culture.
              </p>
              <p>
                Join Angel Henrietta and the rest of our team on a culinary
                journey that transcends borders and connects people through the
                universal language of food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
