import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return <Spinner></Spinner>;
};

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, rgba(30, 19, 98, 0.73) 94%, #0000)
      top/9px 9px no-repeat,
    conic-gradient(#0000 30%, rgba(30, 19, 98, 0.73));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;
  @keyframes spinner-c7wet2 {
   100% {
      transform: rotate(1turn);
   }
}
`;
