import { BOOK_INTERVIEW, INTERVIEW_FEATURES } from "../../utilities/constants";
import { HeaderCard } from "../common/HeaderCard/header-card";
import { Seperator } from "../ui/Seperator";
import { FeatureCard } from "./Features";
export const BookInterview = () => {
  return (
    <div className="book-interview">
      <div className="custom-container">
        <div className="book-interview-grid">
          <HeaderCard {...BOOK_INTERVIEW} />
          <Seperator />

          <div className="feature_cards">
            {INTERVIEW_FEATURES.map((item, idx) => (
              <FeatureCard {...item} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
