\c weatherwear-openweather 

DROP TABLE IF EXISTS results_trips;
DROP TABLE IF EXISTS results;
DROP TABLE IF EXISTS trips;

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  data JSONB
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  author_name VARCHAR(50)
);

CREATE TABLE results_trips (
  trip_id INTEGER REFERENCES trips ON DELETE CASCADE,
  query_id INTEGER REFERENCES results ON DELETE CASCADE
);