import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Importa el archivo que contiene las directivas de Tailwind

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-8">Vite + React + Tailwind CSS</h1>
      <div className="card mt-8 p-4 border rounded-lg shadow-lg bg-gray-800">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
