import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "ohkayyy", "good", "amazing"]}
    />
    <StarRating size={24} color="red" classname="test" defaultRating={3} />
  </React.StrictMode>
);
