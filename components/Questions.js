import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { INTERVIEW_PREP_QA } from "../utilities/constants";
import QuestionAnswers from "./common/QuestionAnswers";

const PINK = "rgba(255, 192, 203, 0.6)";
const BLUE = "rgba(0, 0, 255, 0.6)";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      type="button"
      //   style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      className="d-flex align-items-center cursor-pointer justify-content-between px-3 py-2"
      onClick={decoratedOnClick}
    >
      <div className="purple fw-bold">
        <Image
          alt="question"
          src="/question.svg"
          className="me-3"
          width={24}
          height={24}
        />
        {children}
      </div>
      {isCurrentEventKey ? (
        <Image alt="up" src="/up.svg" width={10} height={10} />
      ) : (
        <Image alt="down" src="/dropdown.svg" width={10} height={10} />
      )}
    </div>
  );
}

const Questions = () => {
  return (
    <Accordion className="interview-accordian" defaultActiveKey="0">
      {INTERVIEW_PREP_QA.map((item, idx) => (
        <QuestionAnswers
          key={idx}
          eventKey={idx}
          ContextAwareToggle={ContextAwareToggle}
          {...item}
        />
      ))}
    </Accordion>
  );
};

export default Questions;
