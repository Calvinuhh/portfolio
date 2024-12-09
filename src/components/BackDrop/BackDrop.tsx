import React from "react";
import style from "./index.module.css";

interface BackDropProps {
  isVisible: boolean;
}

const BackDrop: React.FC<BackDropProps> = ({ isVisible }) => {
  return isVisible ? <div className={style.backdrop}></div> : null;
};

export default BackDrop;
