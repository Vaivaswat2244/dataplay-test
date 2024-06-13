import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/Card";

export const FeatureCard = ({ img, title }) => {
  return (
    <Card variant="orange">
      <div className="feature_cards-content">
        <Image src={img} alt={title} width={30} height={30} />
        {title}
      </div>
    </Card>
  );
};
