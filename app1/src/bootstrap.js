import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root");

const Wrapper = () => {
  return (
    <>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </>
  );
};

const root = createRoot(container);
root.render(<Wrapper />);
