import React, { useState } from 'react';

export default function ProblemInput({ onStart }) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    const match = input.trim().match(/^(\d{1,4})\s*\+\s*(\d{1,4})$/);
    if (!match) {
      alert('Por favor ingresa dos números de hasta 4 dígitos: ej. 1890 + 1148');
      return;
    }
    const a = parseInt(match[1], 10);
    const b = parseInt(match[2], 10);
    onStart([a, b]);
  };

  return (
    <section id="input-section" className="p-4">
      <label htmlFor="sum-input" className="block mb-2">
        Ingresa tu suma (ej. <code>1890 + 1148</code>):
      </label>
      <div className="flex space-x-2">
        <input
          id="sum-input"
          type="text"
          className="border rounded px-2 py-1 flex-grow"
          placeholder="0000 + 0000"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Iniciar
        </button>
      </div>
    </section>
  );
}
