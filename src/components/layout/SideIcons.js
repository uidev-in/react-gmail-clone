import React from "react";
import styled from "styled-components";

//styling our component
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 30% auto;
  padding: 0.5rem;
`;
const Icons = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: auto;
  align-items: start;
  justify-items: center;
  cursor: pointer;
  padding-top: 0.5rem;
`;

//image data
const icons = [
  {
    name: "Drive",
    img_link: "https://cdn.worldvectorlogo.com/logos/google-drive.svg",
  },
  {
    name: "Keep",
    img_link: "https://cdn.worldvectorlogo.com/logos/google-keep.svg",
  },
  {
    name: "Podcast",
    img_link: "https://cdn.worldvectorlogo.com/logos/google-podcasts.svg",
  },
  {
    name: "Calendar",
    img_link: "https://cdn-icons-png.flaticon.com/512/5968/5968499.png",
  },
];

export default function SideIcons() {
  return (
    <>
      <Wrapper>
        <Icons>
          {icons.map((data, id) => (
            <img
              key={id}
              src={data.img_link}
              width={20}
              height={20}
              alt={data.name}
              title={data.name}
            />
          ))}
        </Icons>
      </Wrapper>
      ;
    </>
  );
}
