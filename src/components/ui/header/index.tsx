"use client";

import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./headerMobile";
import HeaderDesktop from "./headerDesktop";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
