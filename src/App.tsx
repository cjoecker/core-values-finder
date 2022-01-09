import React from "react";
import { Steps } from "./components/steps/Steps";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div
      className={"flex-1 w-full overflow-x-hidden flex flex-col min-h-screen"}
    >
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
