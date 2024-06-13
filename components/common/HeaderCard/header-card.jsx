"use client";
import { useRouter } from "next/navigation";
import Button from "../../ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/Card";
import { UnderlineHeader } from "../../ui/UnderlineHeader";

export const HeaderCard = ({ header, subheader, paras, cta }) => {
  const router = useRouter();
  return (
    <div>
      <Card variant="ghost">
        <CardHeader>
          <UnderlineHeader header={header} />
          <h3>{subheader}</h3>
        </CardHeader>
        <CardContent>
          {paras.map((item, idx) => (
            <p key={idx}>{item.para}</p>
          ))}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => router.push(cta.url)}
            variant="rounded_sq_violet"
          >
            {cta.title}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
