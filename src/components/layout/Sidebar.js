import React from "react";
import styled from "styled-components";
import ComposeButton from "../Buttons/ComposeButton";

//styling our component
const Wrapper = styled.div`
  padding: 1rem;
`;
const CompseWrapper = styled.div``;

export default function Sidebar() {
  return (
    <Wrapper>
      <CompseWrapper>
        <ComposeButton />
      </CompseWrapper>
    </Wrapper>
  );
}
