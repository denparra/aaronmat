import React, { useState, useEffect } from 'react';

export default function SumVisualizer({ a, b, onReset }) {
  const digitsA = String(a).padStart(4, '0').split('').map(Number);
  const digitsB = String(b).padStart(4, '0').split('').map(Number);

  const [currentStep, setCurrentStep] = useState(0); // from units to thousands
  const [carries, setCarries] = useState(Array(5).fill(0));
  const [result, setResult] = useState(Array(4).fill(''));

  useEffect(() => {
    if (currentStep < 4) {
      const idx = 3 - currentStep; // start from units
      const sum = digitsA[idx] + digitsB[idx] + carries[idx + 1];
      const digit = sum % 10;
      const carry = Math.floor(sum / 10);

      setResult(prev => {
        const updated = [...prev];
        updated[idx] = digit;
        return updated;
      });
      setCarries(prev => {
        const updated = [...prev];
        updated[idx] = carry;
        return updated;
      });

      const timer = setTimeout(() => setCurrentStep(s => s + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const finalNumber = parseInt([carries[0], ...result].join(''), 10);

  return (
    <div>
      <table className="table-fixed mx-auto border-separate border-spacing-2 text-center">
        <thead>
          <tr>
            <th>Mil</th>
            <th>Centena</th>
            <th>Decena</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {digitsA.map((d, i) => (
              <td key={`a${i}`}>{d}</td>
            ))}
          </tr>
          <tr>
            {digitsB.map((d, i) => (
              <td key={`b${i}`}>{d}</td>
            ))}
          </tr>
          <tr className="font-bold">
            {result.map((d, i) => (
              <td key={`r${i}`}>{d !== '' ? d : '-'}</td>
            ))}
          </tr>
        </tbody>
      </table>
      {currentStep >= 4 && (
        <p className="mt-4 font-bold">
          Resultado: {a} + {b} = {finalNumber}
        </p>
      )}
      {currentStep >= 4 && (
        <button onClick={onReset} className="mt-2 bg-gray-200 px-4 py-1 rounded">
          Nueva suma
        </button>
      )}
    </div>
  );
}
