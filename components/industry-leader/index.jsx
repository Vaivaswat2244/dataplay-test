import Image from "next/image";
import { INDUSTRY_LEADERS } from "../../utilities/constants";
import { SectionHeader } from "../common/HeaderCard/section-header";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";

export const IndustryLeaderSec = () => {
  return (
    <section className="custom-container my-5">
      <SectionHeader
        underlineHeader={`INDUSTRY LEADERS`}
        title={`Backed by Industry leaders`}
        subtitle={"Top companies offer this course to their employees"}
      />
      <div className="industry_leader">
        {INDUSTRY_LEADERS.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="leader-avatar">
                <Image
                  src={item.avatar}
                  alt={item.author}
                  height={100}
                  width={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="leader-name">{item.author}</h4>
            </CardContent>
            <CardFooter>
              <p className="leader-designation">{item.designation}</p>
              <div className="leader-org">
                <p></p>
                <Image
                  quality={70}
                  src={item.orgLogo}
                  alt={item.org}
                  height={100}
                  width={200}
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
