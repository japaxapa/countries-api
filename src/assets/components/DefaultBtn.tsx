import React, { BaseSyntheticEvent } from "react";
import { useThemeContext } from "../context/theme.contex";
import "./DefaultBtn.styles.css";
import LArrowComponent from "./icons/LArrow.icon";

interface BtnProps {
  onBack?: () => void;
  onClick?: (e: BaseSyntheticEvent) => void;
  title?: string;
}

export function DefaultBtn(props: BtnProps) {
  const { onClick, onBack, title } = props;
  const { theme } = useThemeContext();

  return (
    <>
      {title && (
        <div
          className={`btn__container ${theme} ${title ? "btn__width " : ""}`}
          onClick={onClick}
        >
          <span className="country__btn">{title}</span>
        </div>
      )}
      {!title && (
        <div
          className={`btn__container ${theme} ${title ? "btn__width " : ""}`}
          onClick={onBack}
        >
          <LArrowComponent />
          <span className="btn__back">Back</span>
        </div>
      )}
    </>
  );
}
