import React from "react";
import styled from "styled-components";
import ComposeButton from "../buttons/ComposeButton";
import sidebarConfig from "../data/SidebarMenuConfig";

//styling our component
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 5% auto;
  gap: 20px;
`;
const ComposeWrapper = styled.div``;
const MenuWrapper = styled.div``;
const MenuListItem = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  height: 40px;
  line-height:40px
  font-size: 0.9rem;
  letter-spacing: 0.2px;
  color: #202124;
  cursor: pointer;
  :hover {
    color:#d93025;  
    background-color: #fce8e6;
    box-shadow: inset 0 0 0 1px transparent;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    font-weight:600

  }
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <ComposeWrapper>
        <ComposeButton />
      </ComposeWrapper>
      <MenuWrapper>
        {sidebarConfig.map((item, id) => (
          <MenuListItem key={id}>
            {item.icon} {item.title}
          </MenuListItem>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
