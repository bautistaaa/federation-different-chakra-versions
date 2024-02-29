import LocalButton from "./Button";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Wrapper = (children) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
const App = () => (
  <Wrapper>
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 2</h2>
      <LocalButton />
    </div>
  </Wrapper>
);

export default App;
