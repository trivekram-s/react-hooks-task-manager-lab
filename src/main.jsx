
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {TaskProvider} from "./context/TaskContext";
import "./index.css";
ReactDOM.render(<TaskProvider><App/></TaskProvider>, document.getElementById("root"));
