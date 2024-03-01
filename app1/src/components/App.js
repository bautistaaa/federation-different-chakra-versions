import React from "react";
import { Button } from "@chakra-ui/react";

import FederatedApp from "app2/App";
import pkg from '@chakra-ui/react/package.json';

function App() {
  return (
    <div
      style={{ border: "1px blue solid", padding: "10px", margin: "20px 0" }}
    >
      <div>Host App with Chakra v2</div>
      <Button>v2 button</Button>
      <p>Chakra Version from Host: {pkg.version}</p>
      <div
        style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}
      >
        <FederatedApp />
      </div>
    </div>
  );
}
export default App;
