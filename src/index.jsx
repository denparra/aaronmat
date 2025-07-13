// Punto de entrada de tu app (a flesh out)
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ProblemInput from './components/ProblemInput';
import SumVisualizer from './components/SumVisualizer';
import './styles/tailwind.css'; // asumiendo que ya configuraste Tailwind

function App() {
  const [sumandos, setSumandos] = useState(null);

  const handleStart = (pair) => {
    setSumandos(pair);
    // aquí iremos mostrando el área posicional en el siguiente sprint
    console.log('Sumandos recibidos:', pair);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Suma Interactiva con Llevada</h1>
      {!sumandos ? (
        <ProblemInput onStart={handleStart} />
      ) : (
        <SumVisualizer a={sumandos[0]} b={sumandos[1]} onReset={() => setSumandos(null)} />
      )}
    </div>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
