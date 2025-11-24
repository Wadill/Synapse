"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Diagnostics() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleDiagnose = () => {
    setResult(
      symptoms.includes("fever")
        ? "Possible fever detected. Recommend rest and hydration."
        : "No critical issues detected. Consult a doctor if symptoms persist."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-indigo-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          AI Diagnostics
        </motion.h1>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Enter Symptoms</h2>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe your symptoms (e.g., fever, cough)"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleDiagnose}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Get Diagnosis
          </button>
          {result && (
            <p className="mt-4 text-gray-700">{result}</p>
          )}
        </motion.section>
        <section className="mt-10 bg-white p-6 rounded-xl shadow-xl border border-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Diagnostic History</h2>
          <ul className="space-y-4">
            <li className="text-gray-700">2025-09-26: Fever, recommended rest.</li>
            <li className="text-gray-700">2025-09-20: Normal BP, no action.</li>
          </ul>
        </section>
        <section className="mt-6 bg-white p-6 rounded-xl shadow-xl border border-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Health Recommendations</h2>
          <p className="text-gray-700">Maintain hydration, schedule a checkup in 2 weeks.</p>
        </section>
      </div>
    </div>
  );
}