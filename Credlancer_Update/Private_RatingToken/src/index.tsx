import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {StoreProvider} from "./context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreProvider>
);
