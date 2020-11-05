import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ColorProvider from "./context/ColorProvider";

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
