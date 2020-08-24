import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignUpModal,
} from "./components";

import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Toogle Theme
        </PrimaryButton>{" "}
        <PrimaryButton onClick={() => setShowModal(!showModal)}>
          Show Modal
        </PrimaryButton>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          normal ={">"} &nbsp;
          <PrimaryButton>Hello world</PrimaryButton> &nbsp;
          <SecondaryButton>Hello world</SecondaryButton> &nbsp;
          <TertiaryButton>Hello world</TertiaryButton> &nbsp;
        </div>
        <div>
          small disabled =&gt; &nbsp;
          <PrimaryButton disabled modifiers={["small"]}>
            Hello world
          </PrimaryButton>{" "}
          &nbsp;
          <SecondaryButton disabled modifiers={["small"]}>
            Hello world
          </SecondaryButton>{" "}
          &nbsp;
          <TertiaryButton disabled modifiers={["small"]}>
            Hello world
          </TertiaryButton>{" "}
          &nbsp;
        </div>
        {/* <PrimaryButton modifiers={["small", "warning"]}>
          Hello world
        </PrimaryButton>{" "}
        <TertiaryButton modifiers={["small", "warning", "secondaryWarning"]}>
          Hello world
        </TertiaryButton>{" "} */}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
