import {
  CheckBox,
  MoreVert,
  NavigateBefore,
  NavigateNext,
  Refresh,
  Star,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

//styling our component
const Wrapper = styled.div`
  background-color: #fff;
  height: 50px;
  display: grid;
  grid-template-columns: 80% auto;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #f1f3f4;
  border-radius: 5px;
  box-shadow: 2px 2px 0px 0px #f1f3f4;
`;
const Options = styled.div`
  display: flex;
  gap: 10px;
`;
const PaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const EmailCount = styled.div``;
const Pagination = styled.div``;

export default function EmailList() {
  return (
    <>
      <Wrapper>
        <Options>
          <CheckBox />
          <Star />
          <Refresh />
          <MoreVert />
        </Options>
        <PaginationWrapper>
          <EmailCount>1-50 of 1,217</EmailCount>
          <Pagination>
            <NavigateBefore /> <NavigateNext />
          </Pagination>
        </PaginationWrapper>
      </Wrapper>
    </>
  );
}
