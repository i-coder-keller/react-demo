import ReactDom from "react-dom/client"
import React from "react";
import App from "./App"
import "normalize.css"
import "./styles/global.less"
import "antd/dist/antd.css"
import "./service"
ReactDom.createRoot(document.querySelector("#root") as HTMLElement).render(
  <App/>
)

