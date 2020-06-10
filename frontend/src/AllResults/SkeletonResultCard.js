import React from "react";
import { Media, Card } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';

function SkeletonResultCard(idx) {
  return (
    <Card className="mt-2" key={idx}>
      <Card.Body>
        <Media>
          <Skeleton circle={true} height={32} width={32} />
          <Media.Body>
            <h5><Skeleton /></h5>
            <p>< Skeleton /></p>
          </Media.Body>
        </Media>
      </Card.Body>
    </Card>
  )
}

export default SkeletonResultCard;
