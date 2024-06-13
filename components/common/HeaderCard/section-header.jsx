import { UnderlineHeader } from "../../ui/UnderlineHeader";

export const SectionHeader = ({ underlineHeader, title, subtitle }) => {
  return (
    <div className="section_headers">
      <UnderlineHeader header={underlineHeader} />
      <div className="course_sec-header">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
