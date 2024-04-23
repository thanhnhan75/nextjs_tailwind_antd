"use client";
import { ItemNavbar } from "@/components/layout/common/navbar/itemNavbar";
import Image from "next/image";
import React from "react";
import icons from "@/styles/icons";
import { ChartBar, House, Package } from "@phosphor-icons/react/dist/ssr";
import type { IItemNavbarProps } from "@/types/component/common/INavbar";
import { useNavbar } from "@/hooks/layout/common/navbar/useNavbar";
import PageUrls from "@/utilities/enums/pageUrls";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import colors from "@/styles/colors";

const Navbar = (): JSX.Element => {
  const {
    timeSliding,
    idShowChildrenList,
    setIDShowChildrenList,
    isFullNavbar,
    setIsFullNavbar,
    onSliding,
    setOnSliding,
    checkActiveItemNavbar,
    checkIsShowChildren,
  } = useNavbar();

  // array of item navbar
  const listItem: IItemNavbarProps[] = [
    {
      id: 1,
      level: 0,
      title: "Tổng quan",
      disabled: true,
      href: "/",
      icon: <House size={20} />,
    },
    {
      id: 2,
      level: 0,
      title: "Sản phẩm",
      disabled: true,
      href: PageUrls.PRODUCT.BASE,
      icon: <Package size={20} />,
    },
    {
      id: 3,
      level: 0,
      title: "Báo cáo",
      href: PageUrls.REPORT.BASE,
      icon: <ChartBar size={20} />,
      children: [
        {
          id: 3.1,
          level: 1,
          title: "Báo cáo sản lượng tồn kho",
          href: PageUrls.REPORT.INVENTORY_QUANTITY,
        },
      ],
    },
  ];

  const renderItemNavbar = (item: IItemNavbarProps): JSX.Element => {
    if (item.children && item.children.length > 0) {
      return (
        <>
          <ItemNavbar
            content={item}
            active={checkActiveItemNavbar(item.href, item.level)}
            idShowChildrenList={idShowChildrenList}
            setIDShowChildrenList={setIDShowChildrenList}
            isFullSize={isFullNavbar}
            onSliding={onSliding}
          />
          {item.children.map((itemChild: IItemNavbarProps) => (
            <div
              key={itemChild.id}
              className={`${checkIsShowChildren(item.id) ? "block" : "hidden"}`}
              style={{ animation: "slideInDown 0.5s ease" }}
            >
              {renderItemNavbar(itemChild)}
            </div>
          ))}
        </>
      );
    } else {
      return (
        <ItemNavbar
          content={item}
          active={checkActiveItemNavbar(item.href, item.level)}
          idShowChildrenList={idShowChildrenList}
          setIDShowChildrenList={setIDShowChildrenList}
          isFullSize={isFullNavbar}
          onSliding={onSliding}
        />
      );
    }
  };

  return (
    <nav
      className={`px-3 pt-3 flex flex-col gap-3 border  border-y-0 border-l-0 border-r border-r-coolGray-200 ${isFullNavbar ? "w-[15vw]" : "w-[4vw] px-2"} ease-out h-[100vh]`}
      style={{
        transitionDuration: `${timeSliding}ms`,
      }}
    >
      <div className="relative h-[48px] pb-3">
        <div
          onClick={() => {
            setOnSliding(true);
            setIsFullNavbar((prev) => !prev);
          }}
          className={`cursor-pointer absolute top-[70%] -translate-y-1/2 right-[-28px] rounded-full w-[32px] h-[32px] flex justify-center items-center border-coolGray-300 border-[1px] bg-shades-0`}
        >
          {isFullNavbar ? (
            <CaretLeft size={16} color={colors.coolGray[1000]} />
          ) : (
            <CaretRight size={16} color={colors.coolGray[1000]} />
          )}
        </div>

        {isFullNavbar && !onSliding ? (
          <div
            className="flex items-center w-[15vw] h-8 px-2 pt-7 pb-4"
            style={{
              animation: "slideLeftNavbar 0.5s ease",
            }}
          >
            <div className="relative w-[114px] h-[44px]">
              <Image src={icons.logoDigiSale} alt="logo" fill objectFit="contain" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-8 pt-[22px]">
            <div className="relative w-[23px] h-[34px]">
              <Image src={icons.logoDigiSaleMini} alt="logo" fill objectFit="contain" />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col divide-y divide-coolGray-200">
        {listItem.map((item) => (
          <div key={item.id}>{renderItemNavbar(item)}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
