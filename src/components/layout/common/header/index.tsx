import AccountFrame from "@/components/layout/common/header/accountFrame";
import { Bell, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Header = (): JSX.Element => {
  return (
    <header className="flex w-full justify-end items-center py-2 px-6 bg-shades-0 gap-4 shadow-soft2XSmall">
      <Bell size={24} />
      <DownloadSimple size={24} />
      <AccountFrame name="User Name" />
    </header>
  );
};

export default Header;
