import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getKey = (str: string): string => {
    const arr = Array(26).fill(0);

    for (let c of str) {
      arr[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    return arr.join(",");
  };

    const ans: { string[] } = {};
  const strs = ["cbt", "htns", "tbc"];

  for(let str of strs) {
          const key: string = getKey(str);
            ans[key] = str;
      }

  const str1 = "cbt";
  const str2 = "htns";
  const str3 = "tbc";

  console.log(
    "str1:",
    getKey(str1),
    "\nstr2:",
    getKey(str2),
    "\nstr3:",
    getKey(str3)
  );

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the YEET and React logos to learn more
      </p>
    </div>
  );
}

export default App;
