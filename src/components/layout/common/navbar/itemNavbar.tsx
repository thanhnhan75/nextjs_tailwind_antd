"use client";
import TooltipCustom from "@/components/common/tooltip";
import colors from "@/styles/colors";
import type { IItemNavbarProps } from "@/types/component/common/INavbar";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ItemNavbarProps {
  content: IItemNavbarProps;
  idShowChildrenList: any[];
  setIDShowChildrenList: React.Dispatch<React.SetStateAction<any[]>>;
  active?: boolean;
  isFullSize?: boolean;
  onSliding?: boolean;
}

export function ItemNavbar(props: ItemNavbarProps): JSX.Element {
  const { content, active, idShowChildrenList, setIDShowChildrenList, isFullSize, onSliding } = props;
  const router = useRouter();
  const isHaveChildren = content.children && content.children.length > 0;
  useEffect(() => {
    if (content.children && content.children.length > 0 && active) {
      setIDShowChildrenList([...idShowChildrenList, content.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      className="flex items-center gap-1.5 w-full py-1 cursor-pointer"
      onClick={() => {
        if (content.disabled) {
          return;
        }
        if (isHaveChildren) {
          if (idShowChildrenList.includes(content.id)) {
            setIDShowChildrenList(idShowChildrenList.filter((item) => item !== content.id));
          } else {
            setIDShowChildrenList([...idShowChildrenList, content.id]);
          }
        } else {
          router.push(content.href);
        }
      }}
    >
      {isFullSize && !onSliding ? (
        <div
          className={`py-2 pr-1.5 flex items-center rounded justify-between w-full ${active && !isHaveChildren ? "text-primary-100" : "text-coolGray-1000"}`}
          style={{
            paddingLeft: 6 + content.level * 16 + "px",
            background: active
              ? isHaveChildren
                ? colors.primary[200]
                : "linear-gradient(270deg, #0082FB 0%, #00A3FF 100%)"
              : colors.shades[0],
          }}
        >
          <div
            className="flex items-center gap-1.5"
            style={{
              animation: "slideLeftNavbar 0.5s ease ",
            }}
          >
            {React.isValidElement(content.icon) ? (
              <>{content.icon}</>
            ) : (
              <>
                {content.pathIcon !== undefined && content.pathIcon !== "" ? (
                  <Image src={content.pathIcon} alt="logo" width={20} height={20} fill />
                ) : (
                  <></>
                )}
              </>
            )}
            <p className={`font-sans text-medium14 ${onSliding ? "overflow-hidden truncate w-10" : ""} `}>
              {content.title}
            </p>
          </div>
          {isHaveChildren && isFullSize ? (
            idShowChildrenList.includes(content.id) ? (
              <CaretDown size={16} style={{ animation: "rotateToLeft180 0.5s" }} />
            ) : (
              <CaretUp size={16} style={{ animation: "rotateToRight180 0.5s" }} />
            )
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          {content.level === 0 && (
            <TooltipCustom placement="right" content={content.title}>
              <div
                className={`py-2 rounded w-full ${active ? "text-primary-100" : "text-coolGray-1000"} hover:bg-coolGray-200`}
                style={{
                  background: active ? "linear-gradient(270deg, #0082FB 0%, #00A3FF 100%)" : colors.shades[0],
                }}
              >
                {React.isValidElement(content.icon) ? (
                  <div className="w-full flex items-center justify-center">{content.icon}</div>
                ) : (
                  <div className="w-full flex items-center justify-center">
                    {content.pathIcon !== undefined && content.pathIcon !== "" ? (
                      <Image src={content.pathIcon} alt="logo" width={20} height={20} fill />
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            </TooltipCustom>
          )}
        </>
      )}
    </div>
  );
}
