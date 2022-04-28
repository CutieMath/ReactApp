import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";

const MONT_NODE = document.getElementById("root");

createRoot(MONT_NODE).render(<App />)