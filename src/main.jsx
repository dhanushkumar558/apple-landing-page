/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from "react-dom";
import "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BootstrapPractice from "./App.jsx";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))
root.render(<BootstrapPractice />)
