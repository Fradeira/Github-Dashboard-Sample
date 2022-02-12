import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Header} from "./components/Header";
import {RepoDetails} from "./components/Repo-details";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/repo-details" element={<RepoDetails />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
