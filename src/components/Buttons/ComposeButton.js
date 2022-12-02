import React from "react";
import styled from "styled-components";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useDispatch } from "react-redux";
import { composeOpen } from "../../store/email.slice";
//styling our component
const Wrapper = styled.div`
  min-width: 96px;
  max-width: 160px;
`;

const Button = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  gap: 10px;
  align-items: center;
  border-radius: 24px;
  color: #d93025;
  height: 48px;
  padding: 0 24px 0 24px;
  width: 100%;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
    background-color: #fafafb;
  }
`;

export default function ComposeButton() {
  const dispatch = useDispatch();

  function fncOpen() {
    console.log("Open Fnc call");
    dispatch(composeOpen());
  }

  return (
    <Wrapper>
      <Button onClick={fncOpen}>
        <CreateOutlinedIcon />
        <p>Compose</p>
      </Button>
    </Wrapper>
  );
}
