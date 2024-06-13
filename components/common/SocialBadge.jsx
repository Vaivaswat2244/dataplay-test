import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DISCORD_LINK,
  DISCORD_LINK_MESSAGE,
} from "../../utilities/constants";

const SocialBadge = () => {
  return (
    <div className="social-badge">
      <Link href={DISCORD_LINK} target="_blank">
        <div className="social-tag">{DISCORD_LINK_MESSAGE}</div>
      </Link>
      <div className="social-icon">
        <Link href={DISCORD_LINK} target="_blank">
          <Image src="/assets/icons/discord-icon.svg" height={70} width={70} />
        </Link>
      </div>
    </div>
  );
};

export default SocialBadge;
