import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ChakraProvider } from "@chakra-ui/react";

const Wrapper = () => {
  return (
    <>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
