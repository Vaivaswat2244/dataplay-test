"use client";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { useRouter } from "next/navigation";

export const BlogCard = ({ tag, date, author, title, img, url }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className="blog-card">
      <Card>
        <CardHeader>
          <div className="blog-card-header">
            <Badge>{tag}</Badge>
            <div>
              <span>{date}</span>
              <span>•</span>
              <span>{author}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h4 className="blog-card-title">{title}</h4>
        </CardContent>
        <CardFooter>
          <Image
            className="blog-card-img"
            src={img}
            alt={title}
            width={300}
            height={200}
          />
        </CardFooter>
      </Card>
    </div>
  );
};
