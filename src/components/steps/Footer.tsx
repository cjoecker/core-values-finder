import * as React from "react";
import heart from "../../images/heart.svg";

export const Footer = () => {
  return (
    <div className={"mt-auto mb-3 text-center"}>
      Made with <img className={'inline shadow-neon-orange heartbeat -m-2'} src={heart} aria-label={"love"} /> by Christian Jöcker
    </div>
  );
};
