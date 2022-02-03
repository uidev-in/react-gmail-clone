import React from "react";
import styled from "styled-components";

//material-icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//styling our component

const Wrapper = styled.div`
  padding: 10px;
  height: 70px;
  display: grid;
  grid-template-columns: 250px auto 200px;
  align-items: center;
  border-bottom: 1px solid #eceff1;
`;
const LogoWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
`;
const Menu = styled.div`
  display: grid;
  place-items: center;
`;
const Logo = styled.div`
  height: 40px;
  display: flex;
`;
const SearchWrapper = styled.div``;
const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  border: 1px solid transparent;
  border-radius: 8px;
  max-width: 720px;
  height: 50px;
  display: grid;
  grid-template-columns: 5% auto 5%;
  align-items: center;
  padding: 10px;

  input {
    background-color: transparent;
    border: none;
    height: 30px;
    font-size: 1.15rem;
    :focus {
      outline: none;
    }
  }
`;
const IconWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  color: #5f6368;
`;

export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <MenuIcon />
        </div> */}
        <Menu>
          <MenuIcon />
        </Menu>
        <Logo>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" />
        </Logo>
      </LogoWrapper>
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIcon style={{ color: "#5f6368" }} />
          <input type="text" placeholder="Search all conversations" />
          <TuneIcon style={{ color: "#5f6368" }} />
        </SearchBarWrapper>
      </SearchWrapper>
      <IconWrapper>
        <HelpOutlineOutlinedIcon />
        <SettingsOutlinedIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconWrapper>
    </Wrapper>
  );
}
