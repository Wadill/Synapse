"use client";

import { useState } from "react";

export default function DiagnosticForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock AI response
    setResult(
      `Based on your input: ${input}, the AI suggests monitoring your condition. Consult a doctor for a detailed diagnosis.`
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">AI Diagnostics</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter symptoms or health data (e.g., fever, 38°C)..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Diagnosis
        </button>
      </form>
      {result && (
        <div className="mt-4 p-2 bg-green-50 rounded">
          <p className="text-gray-700">{result}</p>
        </div>
      )}
    </div>
  );
}