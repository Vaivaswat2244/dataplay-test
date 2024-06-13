import Image from "next/image";
import { useState } from "react";
import BookNow from "../../components/models/BookNow";

const DealHeader = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="offer-header-bar">
      <div className="container">
        <h4 className="m-0">
          Limited time discount! Book mock interview @Free.
          <span
            style={{ position: "relative", cursor: "pointer" }}
            className="px-1 cursor-pointer"
            onClick={() => setopen(true)}
          >
            Book here
            <Image
              src="/Vector 3.svg"
              className="img-fluid"
              alt="Logo"
              width={112}
              height={26}
            />
          </span>
          {/* <span className="purple fw-bold cursor-pointer" onClick={()=>setopen(true)}> Book Here</span> */}
        </h4>
      </div>
      <BookNow open={open} onHide={setopen} />
    </div>
  );
};

export default DealHeader;
