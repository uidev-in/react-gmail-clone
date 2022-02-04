import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import EmailView from "./EmailView";
import SideIcons from "./SideIcons";

//styling our component
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto 50px;
`;

export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <EmailView />
      <SideIcons />
    </Wrapper>
  );
}
