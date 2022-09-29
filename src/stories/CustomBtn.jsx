import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import animationJSON from "../animations/fish_spinner.json";
import { gsap } from "gsap";

import classes from "./CustomBtn.module.css";

export const CustomBtn = ({
  label,
  color1,
  color2,
  textColor,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const animRef = useRef();
  const btnRef = useRef();

  const clickHandler = () => {
    setLoading(true);
    gsap.to(btnRef.current, { duration: 0.5, width: "40px" });

    setTimeout(() => {
      gsap.to(btnRef.current, { duration: 0.5, width: "160px" });
    }, [2000]);
    setTimeout(() => {
      setLoading(false);
    }, [2500]);
  };

  useEffect(() => {
    if (animRef.current) {
      animRef.current.setSpeed(1);
    }
  }, [loading]);

  const buttonStyleBothColors = {
    background: !loading
      ? "linear-gradient(90deg," + color1 + "," + color2 + ")"
      : "#E6EBE0",
    color: textColor ? textColor : "#000",
    transition: ".4s",
  };

  return (
    <button
      ref={btnRef}
      disabled={loading}
      className={classes.btn}
      style={buttonStyleBothColors}
      onClick={clickHandler}
      {...props}
    >
      {loading ? (
        <Lottie
          animationData={animationJSON}
          style={{ width: "50px" }}
          lottieRef={animRef}
        />
      ) : (
        label
      )}
    </button>
  );
};

CustomBtn.prototypes = {
  label: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  onClick: PropTypes.func,
};

CustomBtn.defaultProps = {
  label: "Button",
  color1: "#fff",
  color2: "#fff",
  textColor: "#000",
  onClick: undefined,
};
