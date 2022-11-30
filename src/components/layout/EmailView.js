import React from "react";
import EmailList from "../Email/EmailList";
import EmailFilter from "../Email/EmailFilter";
import styled from "styled-components";

//styling our component
const Scrollbar = styled.div`
  overflow-x: auto;
  max-height: 80vh;
`;

export default function EmailView() {
  return (
    <div>
      <EmailFilter />
      <Scrollbar>
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
      </Scrollbar>
    </div>
  );
}
