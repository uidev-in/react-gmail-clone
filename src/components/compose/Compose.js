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
import React from "react";
import styled from "styled-components";

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
  width:100%:
  padding: 0.5em;
  margin: 0.5em;
  color: #222;
  background: papayawhip;
  border: none;
  border-radius: 3px;
 
  }
`;
const Textarea = styled.textarea`
  width:100%:
  height:100%;
  padding: 0.5em;
  margin: 0.5em;
  color: #222;
  background: papayawhip;
  border: none;
  border-radius: 3px;
 
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
  return (
    <>
      <Wrapper>
        <Header>
          <Text>New Message</Text>
          <Options>
            <Minimize />
            <CloseFullscreen />
            <Close />
          </Options>
        </Header>
        <Body>
          <Input defaultValue="Recipients" type="email" />
          <Input defaultValue="Subject" type="text" />
          <Textarea />
        </Body>
        <Footer>
          <SendButton>
            <button>
              Send <Send style={{ fontSize: "12px" }} />
            </button>
          </SendButton>
          <EditorTool>
            <FormatColorText />
            <FormatItalic />
            <AttachFile />
            <Image />
            <MoreVert />
          </EditorTool>
          <DeleteButton>
            <DeleteOutline />
          </DeleteButton>
        </Footer>
      </Wrapper>
    </>
  );
}
