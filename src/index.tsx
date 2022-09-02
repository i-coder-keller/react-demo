import ReactDom from "react-dom/client"
import React from "react";
import App from "./App"
import "normalize.css"
import "./styles/global.less"
import "antd/dist/antd.css"
ReactDom.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

