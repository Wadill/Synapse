"use client";
import { motion } from "framer-motion";

interface RecordCardProps {
  type: string;
  date: string;
  status: string;
}

export default function RecordCard({ type, date, status }: RecordCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-teal-100"
    >
      <h3 className="text-lg font-semibold text-teal-600">{type}</h3>
      <p className="text-gray-600">Date: {date}</p>
      <p className="text-gray-600">Status: {status}</p>
    </motion.div>
  );
}