import React from "react";
import { Button } from "@chakra-ui/react";

import FederatedApp from "app2/App";

function App() {
  return (
    <div
      style={{ border: "1px blue solid", padding: "10px", margin: "20px 0" }}
    >
      <div>Host App with Chakra v2</div>
      <Button>v2 button</Button>
      <div
        style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}
      >
        <FederatedApp />
      </div>
    </div>
  );
}
export default App;
