import girl from "../images/pic3.JPG";
import AboutMe from "./AboutMe";

export default function Personal() {
  return (
    <div id="container">
      <div id="head" className="flex flex-row h-[300px]">
        <div
          style={{
            height: "70vh",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <path
              d="M-3.38,149.50 C126.41,85.35 436.23,110.03 502.82,58.71 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#0891B2" }}
            ></path>
          </svg>
        </div>
        <div
          id="personal"
          className="flex absolute justify-center items-center top-1/6 mx-auto mt-20 left-0 right-0 w-1/2 mb-20"
        >
          <img id="my-pic" src={girl} alt="creator" />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
