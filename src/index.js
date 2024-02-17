import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import {Login} from "./components/login/index.jsx";

import { Netflix } from './components/netflix';

import { CafeAndRestaurant } from './components/Cafe and Restaurant/index';

import { DataBinding } from './components/Data Binding/databinding.jsx';

import { ArrayBinding } from './components/Data Binding/arrayBinding'

import { UseStateCon } from './components/useState/useStateIntro';

import { TwoWayDataBinding } from './components/Data Binding/twoWayDataBinding';

import { Nasa } from './components/Nasa/Nasa';

import { APOD } from './components/Nasa_APOD';

import { FakeStore } from './components/Fakestore/fakestore';

import { Navbar } from './components/Component-Properties/navbar';

import { PropsDemo } from './components/Component-Properties/accesingProps'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < FakeStore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
