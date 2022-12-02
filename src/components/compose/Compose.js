import {
  AttachFile,
  Close,
  CloseFullscreen,
  DeleteOutline,
  FormatColorFill,
  FormatColorText,
  FormatItalic,
  HorizontalRule,
  Image,
  Minimize,
  MoreVert,
  Send,
  TramSharp,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { composeClose } from "../../store/email.slice";

//styling our component
const Wrapper = styled.div`
  background-color:#fff;
  position:absolute;
  bottom:0;
  right:50px;
  width:700px

  }
`;
const Header = styled.div`
background-color:#f2f6fc;
padding:0.75rem 1rem;
display:grid;
grid-template-columns:5fr 1fr;
align-items:center;
  }
`;
const Text = styled.div`
font-weight:600;
 
  }
`;
const Options = styled.div`
display:flex;
justify-content:space-around;
 
  }
`;
const Body = styled.div`
width:100%;
min-height:600px;
height:100%;
overflow-y:auto;
display:flex;
flex-direction:column;
  }
`;
const Input = styled.input`
  width:100%;
  padding: 0.5rem;
  margin: 0.5em;
  color: #222;
  heigt:60px;
  background: transparent;
  border: none;
  border-radius: 0px;
  border-bottom:2px solid #f2f6fc;
  :focus{
    outline:none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  }
`;
const Textarea = styled.textarea`
  width:100%:
  height:100%;
  padding: 0.5em;
  margin: 0.5em;
  color: #222;
  background: transparent;
  border: none;
  border-radius: 3px;
  border-bottom:2px solid #f2f6fc;
  font-style:16px;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  :focus{
    outline:none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  }
`;
const Footer = styled.div`
 padding:0 1rem;
 display:grid;
 grid-template-columns:1fr 5fr 1fr;
  }
`;
const SendButton = styled.div`
 padding:0.75rem 1rem;
 button{
    background-color: #0b57d0;
    border-radius:18px;
    border-color:#0b57d0;
    margin: 0;
    max-width: 104px;
    min-width: 72px;
    height:35px;
    color:#fff;
    cursor:pointer;
    :hover {
        color:#0b57d0;  
        background-color: #fff;
        box-shadow: inset 0 0 0 1px transparent;
        border-top-right-radius:20px;
        border-bottom-right-radius:20px;
        font-weight:600
    
      }
 }
 
  }
`;
const EditorTool = styled.div`
 padding:0.75rem 1rem;
 display:flex;
 gap:10px;
  }
`;
const DeleteButton = styled.div`
 padding:0.75rem 1rem;
 text-align:right;
  }
`;

export default function Compose() {
  const dispatch = useDispatch();

  function fncClose() {
    console.log("Called Closed fnc");
    dispatch(composeClose());
  }
  return (
    <>
      <Wrapper>
        <Header>
          <Text>New Message</Text>
          <Options>
            <Minimize />
            <CloseFullscreen />

            <Close style={{ cursor: "pointer" }} onClick={fncClose} />
          </Options>
        </Header>
        <Body>
          <Input placeholder="Recipients" type="email" />
          <Input placeholder="Subject" type="text" />
          <Textarea rows="32" />
        </Body>
        <Footer>
          <SendButton>
            <button>
              Send <Send style={{ fontSize: "12px" }} />
            </button>
          </SendButton>
          <EditorTool>
            <FormatColorText style={{ cursor: "pointer" }} />
            <FormatItalic style={{ cursor: "pointer" }} />
            <AttachFile style={{ cursor: "pointer" }} />
            <Image style={{ cursor: "pointer" }} />
            <MoreVert style={{ cursor: "pointer" }} />
          </EditorTool>
          <DeleteButton>
            <DeleteOutline style={{ cursor: "pointer" }} />
          </DeleteButton>
        </Footer>
      </Wrapper>
    </>
  );
}
