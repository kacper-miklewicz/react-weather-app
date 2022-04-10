import "./Loading.css";

import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading
        type="spinningBubbles"
        color="white"
        height={40}
        width={40}
      />
    </div>
  );
}
