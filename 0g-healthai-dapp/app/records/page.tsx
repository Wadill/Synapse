"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Records() {
  const [records, setRecords] = useState([
    { id: 1, date: "2025-10-08", type: "Blood Test", status: "Stored" },
    { id: 2, date: "2025-10-05", type: "X-Ray", status: "Stored" },
  ]);
  const [newRecord, setNewRecord] = useState({ type: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRecords([...records, { id: records.length + 1, ...newRecord, status: "Uploading" }]);
    setNewRecord({ type: "", date: "" });
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
          Medical Records
        </motion.h1>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Upload New Record</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={newRecord.type}
              onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
              placeholder="Record Type (e.g., Blood Test)"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="date"
              value={newRecord.date}
              onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Upload
            </button>
          </form>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Your Records</h2>
          <ul className="space-y-4">
            {records.map((record) => (
              <li key={record.id} className="text-gray-700">
                {record.type} - {record.date} ({record.status})
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  );
}