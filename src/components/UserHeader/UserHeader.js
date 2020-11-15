import React from "react";
import { useLocation } from "react-router-dom";
import { Download16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          {/* <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4> */}
          <p>{user.basics.label}</p>
          <p>Currently in {user.basics.region}</p>
          <p>
            {user.basics.yearsOfExperience} years of experience as a developer
          </p>
          <p>{user.basics.headline}</p>
          {/* <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p> */}
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://drive.google.com/file/d/1THvM0oGzcfP-Gn0xff4ldj8k0KPf_38b/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <Download16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
