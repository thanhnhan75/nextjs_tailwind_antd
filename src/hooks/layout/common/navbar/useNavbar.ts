import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useNavbar(): {
  timeSliding: number;
  idShowChildrenList: any[];
  isFullNavbar: boolean;
  setIsFullNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  onSliding: boolean;
  setOnSliding: React.Dispatch<React.SetStateAction<boolean>>;
  setIDShowChildrenList: React.Dispatch<React.SetStateAction<any[]>>;
  checkActiveItemNavbar: (href: string, level: number) => boolean;
  checkIsShowChildren: (id: number) => boolean;
} {
  // static data
  const timeSliding = 500;

  // hook data
  const pathname = usePathname();

  // state data
  const [idShowChildrenList, setIDShowChildrenList] = useState<any[]>([]);
  const [isFullNavbar, setIsFullNavbar] = useState<boolean>(true);
  const [onSliding, setOnSliding] = useState<boolean>(false);

  // function
  const checkActiveItemNavbar = (href: string, level: number): boolean => {
    const pathnameArray = pathname?.split("/");
    const hrefArray = href?.split("/");
    let statusActive = false;
    for (let i = 0; i <= level; i++) {
      if (pathnameArray[i + 1] === hrefArray[i + 1]) {
        statusActive = true;
      } else {
        statusActive = false;
        break;
      }
    }
    return statusActive;
  };

  const checkIsShowChildren = (id: number): boolean => {
    return idShowChildrenList.includes(id);
  };

  useEffect(() => {
    // setDelay
    const delay = setTimeout(() => {
      setOnSliding(false);
    }, timeSliding);
    return () => {
      clearTimeout(delay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullNavbar]);

  return {
    timeSliding,
    idShowChildrenList,
    setIDShowChildrenList,
    isFullNavbar,
    onSliding,
    setOnSliding,
    setIsFullNavbar,
    checkActiveItemNavbar,
    checkIsShowChildren,
  };
}
