"use client";
import { useState } from "react";
import ShareModal from "@/components/ShareModal";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Share() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipient, setRecipient] = useState("");

  const handleShare = () => {
    console.log("Sharing with:", recipient);
    setIsModalOpen(false);
    setRecipient("");
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
          Share Records
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300 mx-auto block"
        >
          Share a Record
        </motion.button>
        <ShareModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onShare={handleShare}
          recipient={recipient}
          setRecipient={setRecipient}
        />
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Sharing History</h2>
          <ul className="space-y-4">
            <li className="text-gray-700">2025-09-25: Shared with Dr. Jones.</li>
            <li className="text-gray-700">2025-09-22: Shared with Clinic A.</li>
          </ul>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Sharing Analytics</h2>
          <p className="text-gray-700">Total Shares: 5 | Successful Verifications: 100%</p>
        </motion.section>
      </div>
    </div>
  );
}