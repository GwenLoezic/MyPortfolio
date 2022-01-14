import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./Preloader.css";
import Logo from "../../Assets/Logo.png";

function Preloader() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/loader.json")
    });
  }, []);
  return (
    <div className="Preloader">
      <img className="Logo" src={Logo} alt="Logo" />
      <div className="container" ref={container}></div>
    </div>
  );
}

export default Preloader;
