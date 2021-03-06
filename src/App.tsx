import React, {useEffect} from "react";
import { Steps } from "./components/steps/Steps";
import { Footer } from "./components/Footer";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-216869549-1');
  }, []);

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
