import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import ResultCard from "./ResultCard";
import SkeletonResultCard from "./SkeletonResultCard";
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

  const skeletonResults = (num) => {
    let cards = [];
    for (let i = 0; i < num; i++) {
      cards.push(SkeletonResultCard(i));
    }
    return cards;
  }

  return (
    <Container>
      <h2 className="py-3 text-center">Here are the most recent results people looked for:</h2>
      <ul>
        {results.length ?
          results.map(r => (
            <ResultCard
              data={r}
              key={r.id}
              tempPreference={temperaturePreference}
            />))
          : skeletonResults(5)
        }
      </ul>
    </Container>
  )
}

export default AllResults;