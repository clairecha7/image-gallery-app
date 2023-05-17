import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";
import "../styles/styles.css";

const Homepage = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map((pic) => {
          //   console.log(pic.photographer, pic.src.large);
          return (
            <Picture photographer={pic.photographer} image={pic.src.large} />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
