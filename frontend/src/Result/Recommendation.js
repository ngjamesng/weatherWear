import React from "react";
import { Media } from "react-bootstrap";

const hasRainConditions = condition => (200 <= condition && condition <= 700);
const hasBrightConditions = ({ condition, icon }) => (
  800 <= condition && condition <= 803 && icon.endsWith("d")
)
const hasBadAirConditions = condition => (701 <= condition && condition <= 781);

const topRecommendation = data => {
  const { temp } = data.main;
  const { speed: windSpeed } = data.wind;
  const { id: condition } = data.weather[0];

  let recommendations = [];
  if (temp < 2) {
    recommendations.push("Heavy Jacket 🧥");
  } else if (temp < 10) {
    recommendations.push("Light Jacket 🥼");
  } else if (temp < 19) {
    recommendations.push("Regular shirt, T-Shirt 👕");
  } else if (temp < 23) {
    recommendations.push("T-shirt 👕 , Tank Top 🎽");
  } else {
    recommendations.push("T-shirt 👕 , Tank Top 🎽");
  }
  if (hasRainConditions(condition)) recommendations.push("Rain Jacket 🧥");
  if (windSpeed > 4.4) recommendations.push("Windbreaker 🧥");

  return recommendations.join(", ")
}

const bottomRecommendations = data => {
  const { temp } = data.main;
  const { speed: windSpeed } = data.wind;
  const { id: condition } = data.weather[0];

  let recommendations = [];
  if (temp < 2) {
    recommendations.push("Thick Pants 👖");
  } else if (temp < 10) {
    recommendations.push("Regular pants 👖");
  } else if (temp < 19) {
    recommendations.push("Regular Pants 👖, Shorts 🩳");
  } else if (temp < 23) {
    recommendations.push("Shorts 🩳");
  } else {
    recommendations.push("Shorts 🩳");
  }
  if (hasRainConditions(condition)) recommendations.push("Water-resistant bottoms 👖");
  if (windSpeed > 4.4 && temp < 9) recommendations.push("Wind-resistant Pants 👖");
  return recommendations.join(", ");
}
const FootwearRecommendations = data => {
  const { id: condition } = data.weather[0];
  let recommendations = [];
  hasRainConditions(condition)
    ? recommendations.push("Water-resistant Shoes 🥾")
    : recommendations.push("Regular Shoes 👟");
  return recommendations.join(", ");
}

const accessories = data => {
  const { temp } = data.main;
  const { id: condition, icon } = data.weather[0];
  let recommendations = [];
  if (temp < 2) {
    recommendations.push("Gloves 🧤, Scarf 🧣, Warm Hat 🧢");
  }
  if (hasRainConditions(condition)) {
    recommendations.push("Umbrella ☂️ 🌂");
  }
  if (hasBrightConditions({ condition, icon })) {
    recommendations.push("Sunglasses 🕶  😎 , Hat 🧢 , sunscreen🧴");
  }
  if(hasBadAirConditions(condition)) {
    recommendations.push("Face Mask 😷")
  }

  return recommendations.length
    ? recommendations.join(", ")
    : ["None"];
}

function Recommendation({ data }) {

  return (
    <>
      <Media>
        <Media.Body>
          <h5>Your clothing recommendation for this day:</h5>
          <p> Tops: {topRecommendation(data)} <br />
              Bottoms: {bottomRecommendations(data)} <br />
              Footwear: {FootwearRecommendations(data)} <br />
              Accessories: {accessories(data)}
          </p>
        </Media.Body>
      </Media>
    </>
  )
}

export default Recommendation;