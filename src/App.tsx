import Main from "components/Main";
import Sidebar from "components/Sidebar";
import { useEffect, useRef } from "react";

const App = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const inputSearchAppsRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "a") {
      inputSearchAppsRef.current?.focus();
    }
    if (e.ctrlKey && e.key === "b") {
      inputSearchRef.current?.focus();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid grid-cols-[18rem_1fr] gap-4">
      <Sidebar inputSearchAppsRef={inputSearchAppsRef} />
      <Main inputSearchRef={inputSearchRef} />
    </div>
  );
};

export default App;
