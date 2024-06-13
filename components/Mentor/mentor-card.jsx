"use client";
import Image from "next/image";
import { Card } from "../ui/Card";
import Button from "../ui/Button";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../utilities/constants";

export const MentorCard = ({ profile, name, Designation, bio, linkedin }) => {
  const img = `${API_BASE_URL}${profile}`
  const router = useRouter();
  return (
    <div className="mentor_card">
      <div className="mentor_card-grid">
        <div className="mentor_profile">
          <Image src={img} alt={name} width={60} height={80} />
        </div>
        <div className="mentor_detail">
          <Card>
            <h3>{name}</h3>
            <p>{Designation}</p>
          </Card>
          <p className="mentor_bio">{bio}</p>
          <Button variant="rounded_sq_red" onClick={() => router.replace(linkedin)}>
            <FaLinkedin />
            <span>View Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
