import React from "react";
import styled from "styled-components";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiCopyright,
} from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Media>
          <BiLogoFacebookSquare />
          <AiFillInstagram />
          <BiLogoTwitter />
          <BiLogoYoutube />
        </Media>
        <Policy>
          <Span>Conditions of use</Span>
          <Span>Privacy & Policy</Span>
          <Span>Press Room</Span>
        </Policy>
        <Copywright>
          <BiCopyright /> MovieBox by Joseph Ebuka David
        </Copywright>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 24px;
`;
const Policy = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const Span = styled.span`
  color: var(--gray-900, #111827);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Copywright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-500, #6b7280);
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default Footer;
