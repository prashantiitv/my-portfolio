import React from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import MobileNav from "../MobileNav";

import { StyledContent } from "./styles";

const Layout = ({ user, children }) => {
  return (
    <>
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
      <MobileNav />
    </>
  );
};

export default Layout;
