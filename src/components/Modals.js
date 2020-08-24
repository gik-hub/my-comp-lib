import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0 5 16px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background-color: ${(props) => props.formElementBackground};
  color: ${(props) => props.textOnFormElementBackground};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0)" : "translateY(-200%)",
    config: config.slow,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="sign up for an acc"
          arial-aria-hidden="true"
        />
        <SignUpHeader>Sign up!</SignUpHeader>
        <SignUpText>
          sign up today to get access to cool things bluh bluh bluh
        </SignUpText>
        <PrimaryButton>Sign up</PrimaryButton>
        <CloseModalButton arial-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
