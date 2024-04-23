import React from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

export interface IAccountFrameProps {
  avatar?: string;
  name?: string;
}

const AccountFrame = (props: IAccountFrameProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center gap-2">
      {props.avatar ? (
        <Image src={props.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      ) : (
        <UserCircle size={32} />
      )}
      <p className="font-sans text-coolGray-800">{props.name}</p>
    </div>
  );
};

export default AccountFrame;
