import React from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function GoogleLogin() {

  const router = useRouter();
  const handleSubmit = () => {
    // const url = process.env.NEXT_PUBLIC_APIBASEURL + "/googogleauthcheck/";
        
    const url = '/googleoAuth'
    router.push(url)
  };

  return (
    <button
      onClick={handleSubmit}
      className="google-btn cursor-pointer d-flex align-items-center justify-content-center"
    >
      <Image src="/google-icon.svg" width={20} height={20} alt="google-icon" />
      Continue with Google
    </button>
  );
}