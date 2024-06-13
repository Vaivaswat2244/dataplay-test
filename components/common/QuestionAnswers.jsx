import Image from "next/image";
import React from "react";
import { Accordion, Card } from "react-bootstrap";

const QuestionAnswers = ({
  ContextAwareToggle,
  eventKey,
  question,
  answer,
}) => {
  return (
    <Card>
      <Card.Header>
        <ContextAwareToggle eventKey={eventKey}>{question}</ContextAwareToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body className="d-flex px-3">
          <Image
            src="/answer.svg"
            alt="ans"
            className="mx-3"
            width={20}
            height={20}
          />
          {answer}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default QuestionAnswers;
