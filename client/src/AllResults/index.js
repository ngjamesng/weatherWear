import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import ResultCard from "./ResultCard";

function AllResults() {
  const [results, setResults] = useState([]);

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
        {results.map(r => <ResultCard data={r} key={r.id} />)}
      </ul>
    </Container>
  )
}

export default AllResults;