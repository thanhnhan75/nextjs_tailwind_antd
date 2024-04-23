import colors from "@/styles/colors";
import { Tooltip } from "antd";
import React from "react";

export interface ITooltipProps {
  header?: string;
  content: string;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  children: JSX.Element;
}

const TooltipCustom = (props: ITooltipProps): JSX.Element => {
  return (
    <Tooltip
      title={
        <div className="flex flex-col gap-1">
          {props.header && <p className="text-coolGray-1000 text-medium12 font-sans">{props.header}</p>}
          <p className="text-coolGray-1200 text-regular12 font-sans">{props.content}</p>
        </div>
      }
      color={colors.shades[0]}
      placement={props.placement}
    >
      {props.children}
    </Tooltip>
  );
};

export default TooltipCustom;
