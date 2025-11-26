"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const healthData = {
    labels: ["Sep 20", "Sep 22", "Sep 24", "Sep 26", "Sep 28"],
    datasets: [
      {
        label: "Health Score",
        data: [65, 70, 72, 68, 75],
        borderColor: "rgba(6, 182, 212, 1)",
        backgroundColor: "rgba(6, 182, 212, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const aiInsightData = {
    labels: ["Diagnosis", "Treatment", "Prevention"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#34D399", "#60A5FA", "#A78BFA"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Fixed type
      },
    },
  };

  const aiOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const, // Fixed type
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-indigo-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          0G-HealthAI Dashboard
        </motion.h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Your premier hub for decentralized healthcare innovation.
        </p>

        {/* Health Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Health Overview</h2>
          <Line data={healthData} options={options} />
        </motion.section>

        {/* Record Storage Status */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Record Storage Status</h2>
          <p className="text-gray-700">Total Records: 5 | Stored on 0G Storage: 100% Encrypted</p>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
            Upload New Record
          </button>
        </motion.section>

        {/* AI Insights Dashboard */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">AI Insights Dashboard</h2>
          <div className="h-64">
            <Line data={aiInsightData} options={aiOptions} />
          </div>
        </motion.section>

        {/* INFT Management */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">INFT Management</h2>
          <p className="text-gray-700">Active INFTs: 3 | Last Verified: 2025-10-09</p>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
            Verify INFTs
          </button>
        </motion.section>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Link href="/records">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-2">Medical Records</h3>
              <p className="text-gray-600">Securely store and view your health history.</p>
            </motion.div>
          </Link>
          <Link href="/diagnostics">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-2">AI Diagnostics</h3>
              <p className="text-gray-600">Receive advanced AI health insights.</p>
            </motion.div>
          </Link>
          <Link href="/share">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-2">Share Records</h3>
              <p className="text-gray-600">Share securely with verified providers.</p>
            </motion.div>
          </Link>
        </div>

        {/* Notifications Panel */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-xl mb-10 border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Notifications</h2>
          <ul className="space-y-4">
            <li className="text-gray-700">New diagnostic report available!</li>
            <li className="text-gray-700">Record shared with Dr. Smith.</li>
            <li className="text-gray-700">INFT verification completed.</li>
          </ul>
        </motion.section>

        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Your Profile</h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
              WD
            </div>
            <div>
              <p className="text-lg text-gray-800">Wadill</p>
              <button className="mt-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}