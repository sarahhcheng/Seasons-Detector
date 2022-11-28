import React from "react";

const getSeason = (lat, month) => {
  if (month < 3 && month > 8) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const icon = season === "winter" ? "snowflake" : "sun";

  console.log(season);
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>
        {season === "winter" ? "Brrr it`s chilly" : "Wow it is hot outside!"}{" "}
      </h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
