import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink, ProfileView } from "./styles";

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          <ProfileLink>
            <ProfileView
              href="https://www.linkedin.com/in/prashant-bharti/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://github.com/prashantiitv/"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://prashantiit.live"
              target="_blank"
              rel="noreferrer noopener"
            >
              Portfolio
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://www.hackerearth.com/@prashantiitv"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hackerearth
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://www.scaler.com/academy/profile/b94ba0de3405/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Scaler
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://leetcode.com/prashantiitv/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Leetcode
            </ProfileView>
            <span> &sdot; </span>
            <ProfileView
              href="https://codepen.io/prashantiit"
              target="_blank"
              rel="noreferrer noopener"
            >
              CodePen
            </ProfileView>
          </ProfileLink>

          {/* {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              <ProfileView
                href={profile.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.network}
              </ProfileView>
            </ProfileLink>
          ))} */}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
