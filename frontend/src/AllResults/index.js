import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import ResultCard from "./ResultCard";
import SkeletonResultCard from "./SkeletonResultCard";
import { useSelector } from "react-redux";


function AllResults() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const temperaturePreference = useSelector(store => store.temperaturePreference);

  useEffect(() => {
    setIsLoading(true);
    async function getResults() {
      let resp = await WeatherWearAPI.getResults();
      setResults(resp);
      setIsLoading(false);
    };
    getResults();
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
      <div className="py-3 text-center">
        <p className="lead">Here are the most recent results people looked for:</p>
      </div>
      <ul>
        {isLoading
          ? skeletonResults(5)
          : results.map(r => (
            <ResultCard
              id={r.id}
              data={r.data}
              key={r.id}
              tempPreference={temperaturePreference}
            />))
        }
        {!isLoading && !results.length && <p>sorry, no results found. Try checking the weather by city or ZIP to see results!</p>}
      </ul>
    </Container>
  )
}

export default AllResults;