import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";


// {"id":2,"woeid":2487956,
// "city_name":"San Francisco",
// "location_type":"City",
// "applicable_date":"2020-04-20T07:00:00.000Z",
// "the_temp":16,
// "wind_speed":9,
// "weather_state_name":"Light Cloud"
//weather_state_abbr: "c"
// }
const wetConditions = new Set(["s", "lr", "hr", "t", "h", "sl", "sn"]);
const brightConditions = new Set(["s", "hc", "lc", "c"]);

function Recommendation({ data }) {
  const topRecommendation = data => {
    const { the_temp, wind_speed, weather_state_abbr } = data;
    let recommendations = [];
    if (the_temp < 2) {
      recommendations.push("Heavy Jacket");
    } else if (the_temp < 10) {
      recommendations.push("Light Jacket");
    } else if (the_temp < 19) {
      recommendations.push("Regular Shirt/T-Shirt");
    } else if (the_temp < 23) {
      recommendations.push("T-shirt/Tank Top");
    }
    if (wetConditions.has(weather_state_abbr)) recommendations.push("Rain Jacket");
    if (wind_speed > 9) recommendations.push("Windbreaker");

    return recommendations.join(", ")
  }

  const bottomRecommendations = data => {
    const { the_temp, wind_speed, weather_state_abbr } = data;
    let recommendations = [];
    if (the_temp < 2) {
      recommendations.push("Thick Pants");
    } else if (the_temp < 10) {
      recommendations.push("Regular pants");
    } else if (the_temp < 19) {
      recommendations.push("Regular Pants/Shorts");
    } else if (the_temp < 23) {
      recommendations.push("Shorts");
    }
    if (wetConditions.has(weather_state_abbr)) recommendations.push("Water-resistant bottoms");
    if (wind_speed > 10 && the_temp < 9) recommendations.push("Wind-resistant Pants");
    return recommendations.join(", ");
  }

  const FootwearRecommendations = data => {
    const { the_temp, weather_state_abbr } = data;
    let recommendations = [];
    wetConditions.has(weather_state_abbr)
      ? recommendations.push("Water-resistant Shoes")
      : recommendations.push("Regular Shoes");
    return recommendations.join(", ");
  }

  const accessories = data => {
    const { the_temp, weather_state_abbr, wind_speed } = data;
    let recommendations = [];
    if(the_temp < 2) {
      recommendations.push("Gloves, Scarf, Warm Hat");
    }
    if(wetConditions.has(weather_state_abbr)) {
      recommendations.push("Umbrella");
    }
    if(brightConditions.has(weather_state_abbr)) {
      recommendations.push("Sunglasses, Hat");
    }
    return recommendations.join(", ");
  }

  return (
    <>
      <Media>
        <Media.Body>
          <h5>Your clothing recommendation for this day:</h5>
          <p> Tops: {topRecommendation(data)}</p>
          <p> Bottoms: {bottomRecommendations(data)}</p>
          <p>Footwear: {FootwearRecommendations(data)}</p>
          <p>Accessories: {accessories(data)}</p>
        </Media.Body>
      </Media>
    </>
  )
}

export default Recommendation;