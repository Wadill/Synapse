"use client"; 
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar /> {/* Add Navbar at the top */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Welcome to 0G-HealthAI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Revolutionizing healthcare with decentralized AI power.
        </motion.p>
        <Link href="/dashboard">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-12 bg-white shadow-lg rounded-lg mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* What it Does */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">What it Does</h2>
            <p className="text-gray-700">
              0G-HealthAI is a decentralized AI-powered healthcare management app that empowers patients and providers with secure, transparent medical record storage, AI-driven diagnostics, and verifiable data sharing via Intelligent NFTs (INFTs) on the 0G blockchain.
            </p>
          </motion.div>

          {/* The Problem it Solves */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">The Problem it Solves</h2>
            <p className="text-gray-700">
              It addresses the lack of privacy, accessibility, and trust in traditional healthcare systems by offering a decentralized platform where patients control their data, healthcare providers access real-time insights, and AI diagnostics enhance treatment accuracy—all while mitigating data breaches and centralized control.
            </p>
          </motion.div>

          {/* Challenges I Ran Into */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Challenges I Ran Into</h2>
            <p className="text-gray-700">
              Integrating 0G’s modular services (Storage, Compute, DA) with Next.js proved complex due to limited documentation. Ensuring secure encryption for medical data on 0G Storage required extensive testing. Balancing AI inference speed on 0G Compute with cost efficiency was another hurdle.
            </p>
          </motion.div>

          {/* Technologies I Used */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Technologies I Used</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Frontend:</strong> Next.js (React framework), Tailwind CSS (styling), TypeScript (type safety).</li>
              <li><strong>Blockchain:</strong> 0G Chain (EVM-compatible), 0G Storage, 0G Compute, 0G Data Availability.</li>
              <li><strong>Development Tools:</strong> Hardhat (smart contracts), Ethers.js (blockchain interaction), RainbowKit (wallet integration), 0G SDKs.</li>
              <li><strong>AI:</strong> 0G Compute for running diagnostic models.</li>
            </ul>
          </motion.div>

          {/* How We Built It */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="p-6 md:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Built It</h2>
            <p className="text-gray-700">
              We started with a Next.js project setup, integrating Tailwind CSS and TypeScript for a sleek UI. Smart contracts were crafted using Solidity and deployed via Hardhat on 0G Chain to manage INFTs and permissions. 0G Storage handled encrypted data, while 0G Compute powered AI diagnostics. APIs bridged frontend and blockchain services, with RainbowKit enabling secure wallet access. Iterative testing on the 0G testnet refined the build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} 0G-HealthAI </p>
        
      </footer>
    </div>
  );
}