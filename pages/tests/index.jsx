import React from "react";
import DPFormGeneratorUser from "../../components/autoForm/FormGenaratorUser";
import Loader from "../../components/Loader";
import Button from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { UnderlineHeader } from "../../components/ui/UnderlineHeader";

const TestPage = () => {
  return (
    <div>
      <div className="mt-5 d-flex justify-content-around">
        {/* <DPFormGeneratorUser formId="T3mMPKdPs7yrHfbTNjxJcJs9LtcbqZ" /> */}
        <Button>Button 1</Button>
        <Button variant="rounded_sq_violet">Button 2</Button>
        <Button variant="rounded_sq_red">Button 3</Button>
        <Button variant="dark_sq">Button 4</Button>
        <Button variant="left_right_gradient">Button 5</Button>
      </div>
      <div className="mt-5 d-flex justify-content-around">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="danger">
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="gradient_violet">
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="orange">
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <div className="mt-5 d-flex justify-content-around">
        <Badge>Badge</Badge>
        <Badge shape="circle">Badge</Badge>
        <Badge shape="pill">Badge</Badge>
        <Badge variant="gray">Badge</Badge>
        <Badge variant="gray" shape="circle">
          Badge
        </Badge>
        <Badge variant="gray" shape="pill">
          Badge
        </Badge>
      </div>
      <div className="mt-5 d-flex justify-content-around">
        <UnderlineHeader header={"Welcome to Dataplay"} />
      </div>
    </div>
  );
};

export default TestPage;
