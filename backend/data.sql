\c weatherwear-openweather 

DROP TABLE IF EXISTS conditions;
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    WOEID integer PRIMARY KEY,
    city_name text NOT NULL,
    location_type text NOT NULL
);

CREATE TABLE conditions (
  id SERIAL PRIMARY KEY,
  WOEID integer REFERENCES locations(WOEID),
  applicable_date date, 
  the_temp integer, 
  wind_speed float,
  weather_state_name text NOT NULL,
  weather_state_abbr text NOT NULL
);