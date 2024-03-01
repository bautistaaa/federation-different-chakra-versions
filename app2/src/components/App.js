import LocalButton from './Button';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import pkg from '@chakra-ui/react/package.json';

const Wrapper = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
const App = () => {
  // how i make this work?!
  return (
    <Wrapper>
      <div>
        <h1>Basic Host-Remote</h1>
        <h2>App 2</h2>
        <p>Chakra Version from Remote: {pkg.version}</p>
        <LocalButton />
      </div>
    </Wrapper>
  );
  return (
    <div>
      <h1>Remote App with Chakra v1</h1>
      <h2>App 2</h2>
    </div>
  );
};

export default App;
