import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const handleClick = (value: string) => {
     if (value === "C") {
    setInput("");
    return;
    }
  if (value === "=") {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
    return;
  }

  setInput(input + value);
  };
const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "C", "0", "=", "+"
];
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="w-80 rounded-xl bg-slate-800 p-5 shadow-lg">

        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          Calculator
        </h1>

        <input
          className="mb-4 w-full rounded bg-slate-700 p-3 text-right text-2xl text-white"
          value={input}
          readOnly
        />
       <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="rounded bg-blue-500 p-4 text-xl text-white hover:bg-blue-600"
          >
            {btn}
          </button>
        ))}
       </div>
      </div>
    </div>
  );
}

export default App;