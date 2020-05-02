import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import ResultCard from "./ResultCard";
import { useSelector } from "react-redux";


function AllResults() {
  const [results, setResults] = useState([]);
  const temperaturePreference = useSelector(store => store.temperaturePreference);

  useEffect(() => {
    (async function getResults() {
      let resp = await WeatherWearAPI.getResults();
      setResults(resp);
    })();
  }, []);

  return (
    <Container>
      <h2 className="mt-4 text-center">Here are the most recent results people looked for:</h2>
      <ul>
        {results.map(r => (
          <ResultCard
            data={r}
            key={r.id}
            tempPreference={temperaturePreference}
          />))}
      </ul>
    </Container>
  )
}

export default AllResults;