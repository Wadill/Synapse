"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: (recipient: string) => void;
  recipient: string;
  setRecipient: (recipient: string) => void;
}

export default function ShareModal({
  isOpen,
  onClose,
  onShare,
  recipient,
  setRecipient,
}: ShareModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Share Record</h2>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient (e.g., Dr. Smith)"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() => onShare(recipient)}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Share
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}