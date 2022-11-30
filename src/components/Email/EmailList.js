import React from "react";
import {
  CheckBox,
  MoreVert,
  NavigateBefore,
  NavigateNext,
  Refresh,
  Star,
  CheckBoxOutlineBlank,
  StarBorderOutlined,
} from "@mui/icons-material";

import styled from "styled-components";

//styling our component
const Wrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 5% auto;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #f1f3f4;
  border-radius: 5px;
  box-shadow: 2px 2px 0px 0px #f1f3f4;
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 0px 0px #f1f3f4;
    border-bottom: 1px solid #f1f3f4;
  }
`;
const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Overview = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 14% 36% auto 5%;
  align-items: center;
  justify-items: start;
`;
const Sender = styled.div`
  font-weight: 600;
`;
const Subject = styled.div`
  font-weight: 600;
`;
const Body = styled.div`
  width: 100%;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Timestamp = styled.div`
  font-weight: 600;
  padding-left: 1rem;
`;
export default function EmailList() {
  return (
    <>
      <Wrapper>
        <Options>
          <CheckBoxOutlineBlank />
          <StarBorderOutlined />
        </Options>
        <Overview>
          <Sender>
            <span>Mantarav Private Limited</span>
          </Sender>
          <Subject>
            <span>
              Mantarav Private Limited congratulates Vivek on 1st work
              anniversary!
            </span>
          </Subject>
          <Body>
            <span>
              Dear Vivek, Today will mark your 2nd anniversary as a member of
              the Mantarav Private Limited
            </span>
          </Body>
          <Timestamp>Jan 1</Timestamp>
        </Overview>
      </Wrapper>
    </>
  );
}
