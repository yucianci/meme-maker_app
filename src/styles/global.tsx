import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #eee;
  }

  button, input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 2px 2px 2px #d1d8e0;
  background: #fff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #bdc3c7cf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a6aaad;
}
`;
