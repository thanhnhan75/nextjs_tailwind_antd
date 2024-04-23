import type { ICommonButtonProps } from "@/types/component/common/IButton";
import React from "react";

export function CommonButton(props: ICommonButtonProps): JSX.Element {
  const { level, title, size, typeButton, startIcon, endIcon, disabled, handleButton } = props;
  let buttonClasses = "";
  let contentClasses = "";

  // add classes Tailwind according to type, level and disabled
  switch (typeButton) {
    case "primary": {
      switch (level) {
        case "primary":
          switch (disabled) {
            case true:
              buttonClasses += " bg-coolGray-200";
              contentClasses += " text-coolGray-500";
              break;
            default:
              buttonClasses += " bg-primary-900 hover:bg-primary-1000";
              contentClasses += " text-shades-0";
              break;
          }
          break;
        case "secondary":
          switch (disabled) {
            case true:
              buttonClasses += " bg-coolGray-200";
              contentClasses += " text-coolGray-500";
              break;
            default:
              buttonClasses += " bg-primary-200 hover:bg-primary-300";
              contentClasses += " text-primary-900";
              break;
          }
          break;
        case "outlined":
          switch (disabled) {
            case true:
              buttonClasses += " bg-shades-0 border-solid border-[1px] border-coolGray-400";
              contentClasses += " text-coolGray-400";
              break;
            default:
              buttonClasses += " border-solid border-[1px] border-primary-900 hover:border-primary-1000 bg-shades-0";
              contentClasses += " text-primary-900 hover:text-primary-1000";
              break;
          }
          break;
        case "tertiary":
          switch (disabled) {
            case true:
              buttonClasses += "";
              contentClasses += " text-coolGray-400";
              break;
            default:
              buttonClasses += "";
              contentClasses += " text-primary-900 hover:text-primary-1000";
              break;
          }
          break;
        default:
          buttonClasses += " bg-primary-900 hover:bg-primary-1000";
          contentClasses += " text-shades-0";
          break;
      }
      break;
    }
    case "neutral": {
      switch (level) {
        case "primary":
          buttonClasses += " bg-shades-0 border-solid border-[1px] border-coolGray-300 hover:border-coolGray-600";
          contentClasses += " text-coolGray-1000";
          break;
        case "tertiary":
          buttonClasses += "";
          contentClasses += " text-coolGray-1000";
          break;
        default:
          buttonClasses += " bg-shades-0 border-solid border-[1px] border-coolGray-300 hover:border-coolGray-600";
          contentClasses += " text-coolGray-1000";
          break;
      }
      break;
    }
    default:
      buttonClasses += " bg-primary-900 hover:bg-primary-1000";
      contentClasses += " text-shades-0";
      break;
  }

  // Add classes Tailwind according to size
  switch (size) {
    case "large":
      buttonClasses += " py-3 px-4";
      contentClasses += " text-medium16";
      break;
    case "medium":
      buttonClasses += " py-2 px-4";
      contentClasses += " text-medium16";
      break;
    case "small":
      buttonClasses += " py-2 px-3";
      contentClasses += " text-medium12";
      break;
    case "full-width":
      buttonClasses += " py-3 px-4 w-full ";
      contentClasses += " text-medium16";
      break;
    default:
      buttonClasses += " py-3 px-4";
      contentClasses += " text-medium16";
      break;
  }

  return (
    <>
      <button
        {...props}
        disabled={props.disabled}
        className={`flex justify-center items-center rounded-md text-center ${disabled ? "" : "press-button"} ${buttonClasses} ${props.className ?? ""}`}
        onClick={handleButton}
      >
        <div className={`flex gap-1.5 items-center justify-between ${contentClasses}`}>
          {React.isValidElement(startIcon) ? <div>{startIcon}</div> : null}
          <p className={`font-sans`}>{title}</p>
          {React.isValidElement(endIcon) ? <div>{endIcon}</div> : null}
        </div>
      </button>
    </>
  );
}
