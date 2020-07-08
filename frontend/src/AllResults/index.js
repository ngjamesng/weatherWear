import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import ResultCard from "./ResultCard";
import SkeletonResultCard from "./SkeletonResultCard";
import Result from "../Result";
import ErrorToast from "../ErrorToast";

import { useSelector } from "react-redux";

function AllResults() {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const temperaturePreference = useSelector(store => store.temperaturePreference);

  const [currentResult, setCurrentResult] = useState(null);
  const showDetails = (details) => setCurrentResult(details);

  useEffect(() => {
    async function getResults() {
      try {
        let resp = await WeatherWearAPI.getResults();
        setResults(resp);
      } catch (err) {
        setErrors(err);
      } finally {
        setIsLoading(false);
      }
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
        <p className="lead">Here are the most recent results people looked for, from all over the world:</p>
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
              showDetails={showDetails}
            />))
        }
        {!isLoading && !results.length && <p>sorry, no results found. Try adding some by checking the weather to see results!</p>}
      </ul>
      {
        <Modal
          show={currentResult}
          onHide={() => setCurrentResult(null)}
        >
          <Modal.Header closeButton>
            <Modal.Title>result {}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Result
              resultData={currentResult}
              isLoading={false}
            />
          </Modal.Body>
        </Modal>
      }
      {errors?.map((e, idx) => (
        <ErrorToast
          key={`${e}-${idx}`}
          message={e}
          errors={errors}
          setErrors={setErrors}
          errorId={idx}
        />
      ))}
    </Container>
  )
}

export default AllResults;