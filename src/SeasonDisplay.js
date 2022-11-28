import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month === 12 || month < 2) {
    return lat > 0 ? "winter" : "summer";
  } else if (month >= 2 && month < 5) {
    return lat > 0 ? "spring" : "fall";
  } else if (month >= 5 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "fall" : "spring";
  }

  // if (month < 3 && month > 8) {
  //   return lat > 0 ? "winter" : "summer";
  // } else {
  //   return lat > 0 ? "summer" : "winter";
  // }
};

const seasonConfig = {
  spring: {
    text: "Flowers are blooming right now!",
    // icon
  },

  summer: {
    text: "Wow it is hot!",
    icon: "sun",
  },

  fall: {
    text: "It is nice outside.",
    icon: "leaf",
  },

  winter: {
    text: "Brrr it is chilly",
    icon: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  //   const getValue = (val1, val2) => {
  //     return season === "winter" ? val1 : val2;
  //   };

  const val = seasonConfig[season];

  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${val["icon"]} icon`} />
      <h1>{val["text"]} </h1>
      <i className={`icon-right massive ${val["icon"]} icon`} />
    </div>
  );
};

export default SeasonDisplay;
