import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./NoMatch.css";

function NoMatch() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/error404.json")
    });
  }, []);
  return (
    <div className="NoMatch">
      <h1>Oups, tu t'es perdu?!</h1>
      <div className="container" ref={container}></div>
    </div>
  );
}

export default NoMatch;
