import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

serviceWorker.register();
reportWebVitals(sendToAnalytics);

function sendToAnalytics({ id, name, value }: {id: string, name: string, value:number}) {
    ReactGA.ga('send', 'event', {
        eventCategory: 'Web Vitals',
        eventAction: name,
        eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        eventLabel: id,
        nonInteraction: true,
    });
}
