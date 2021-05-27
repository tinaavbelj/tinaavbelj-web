import React, { useEffect } from "react";
import Lottie from "react-lottie";

import ProjectPanel from "../shared/ProjectPanel";
import TextBig from "../shared/TextBig";

import animationData from "../../../animations/messages";

const Icons = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    html.scrollTop = 0;
  });

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <ProjectPanel>
        <TextBig></TextBig>
        <div>
          <Lottie options={animationOptions} height={400} width={400} />
        </div>
      </ProjectPanel>
    </div>
  );
};

export default Icons;
