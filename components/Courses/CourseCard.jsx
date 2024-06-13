"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export const CourseCard = ({
  id,
  image,
  tag = `DATA SCIENCE`,
  title,
  description,
  url,
  list,
}) => {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <div className="course_card_header">
          <Image src={image} alt={title} width={300} height={200} />
          <Badge variant="gray" shape="pill">
            {tag}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="course_card_content">
          <h4>{title.length > 35 ? `${title.slice(0, 35)}...` : title}</h4>
          <p>
            {description.length > 200
              ? `${description.slice(0, 200)}...`
              : description}
          </p>
          {/* <ul>
            {list.map((item, idx) => (
              <li key={idx}>{item.bullet}</li>
            ))}
          </ul> */}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => router.push(`/course/${id}`)}
          variant="left_right_gradient"
        >
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};
