import { useState } from "react";
import { Navbar } from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
