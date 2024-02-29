import React from "react";
import { Button } from "@chakra-ui/react";

import FederatedButton from "app2/Button";

function App() {
  return (
    <div>
      <div>I am Host App</div>
      <Button>v2 button</Button>
      <div
        style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}
      >
        <FederatedButton />
      </div>
    </div>
  );
}
export default App;
