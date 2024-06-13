import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { UnderlineHeader } from "../ui/UnderlineHeader";
import Button from "../ui/Button";
import Logo from "../Logo/logo";
import { HeaderCard } from "../common/HeaderCard/header-card";
import { WELCOME } from "../../utilities/constants";

const DataScienceSec = () => {
  return (
    <div className="custom-container">
      <div className="welcome-grid">
        <HeaderCard {...WELCOME} />
        <div>
          <Card variant="ghost">
            <div className="welcome-img">
              <Logo />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataScienceSec;
