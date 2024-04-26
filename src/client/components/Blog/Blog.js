import React from "react";
import blogBanner from "./myimage1.jpg";
import "./blog.css";
export function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-img">
        <img className="blog-img" src={blogBanner} alt="blog-image" />
      </div>

      <div className="blog-text">
        <h2 className="description-header">
          Elevate Your Dining Experience: Explore Our Meal Sharing Community!
        </h2>
        <ul className="text-food">
          <li>
            <h4 className="blog-title"> Embark on a Culinary Journey</h4>
            <p>
              Indulge in a culinary odyssey like no other as you immerse
              yourself in the rich tapestry of flavors, cultures, and stories
              that define our meal sharing platform. Our mission is to take you
              on a gastronomic adventure that transcends borders and brings
              people together through the universal language of food.
            </p>
          </li>
          <li>
            <h4 className="blog-title">Celebrating Food and Connection</h4>
            <p>
              At the heart of our meal sharing community lies a deep
              appreciation for the power of food to forge connections and foster
              meaningful relationships. We believe that sharing a meal is more
              than just a culinary experience-it's a chance to come together,
              celebrate diversity, and create lasting memories..
            </p>
          </li>
          <li>
            <h4 className="blog-title">Savor the Joy of Discovery</h4>
            <p>
              Prepare to tantalize your taste buds and awaken your senses as you
              delve into the endless possibilities that await you on our
              platform. From tried-and-true favorites to hidden gems waiting to
              be uncovered, every meal shared is a new opportunity to expand
              your culinary horizons and discover something truly special.
            </p>
          </li>
          <li>
            <h4 className="blog-title">Join Our Culinary Community</h4>
            <p>
              Ready to embark on your own culinary adventure? Join our vibrant
              community of food lovers, chefs, and home cooks who are passionate
              about sharing their love of food with others. Whether you're
              looking for recipe inspiration, cooking tips, or simply a place to
              connect with like-minded individuals, you'll find everything you
              need to satisfy your appetite for culinary exploration right here.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
