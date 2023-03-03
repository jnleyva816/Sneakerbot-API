import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addresses from './pages/addresses/addresses.js'
import Tasks from './pages/Tasks/tasks'
import Proxies from './pages/Proxies/proxies'
import 'remixicon/fonts/remixicon.css'

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

if(document.readyState ==='complete'){
  const body = document.querySelector('body'),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text")
        modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
      })
      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close")
      })
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "addresses",
    element: <Addresses/>
  },
  {
    path: "tasks",
    element: <Tasks/>
  },
  {
    path: "proxies",
    element: <Proxies/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
