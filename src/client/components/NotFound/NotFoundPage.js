import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <div className="not-found-card">
      <div className="not-found-container">
        <h3 className="not-found"> Page Not Found! </h3>
        <div>
          <Link to="/">
            <p className="not-found-text">Back to home page</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
