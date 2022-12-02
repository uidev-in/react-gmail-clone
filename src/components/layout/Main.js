import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import EmailView from "./EmailView";
import SideIcons from "./SideIcons";
import Compose from "../compose/Compose";
import { useSelector } from "react-redux";
import { composeBoxState } from ".././../store/email.slice";

//styling our component
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto 50px;
`;

export default function Main() {
  const isComposeOpen = useSelector(composeBoxState);

  return (
    <Wrapper>
      <Sidebar />
      <EmailView />
      <SideIcons />
      {isComposeOpen && <Compose />}
    </Wrapper>
  );
}
