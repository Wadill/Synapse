"use client";
import { useState } from "react";
import ShareModal from "@/components/ShareModal";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Share() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [activeTab, setActiveTab] = useState("direct"); // New: direct vs marketplace
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [zkProofResult, setZkProofResult] = useState<string | null>(null);

  // Mock marketplace requests
  const marketplaceRequests = [
    {
      id: 1,
      partner: "HealthInsure Co.",
      type: "Insurance Quote",
      requirements: ["BMI < 30", "Age 18-65", "No diabetes history"],
      reward: "50 $SYNAPSE",
      needsSubset: true, // Requires encrypted blood panel subset
    },
    {
      id: 2,
      partner: "Cardio Trial Research",
      type: "Clinical Trial Eligibility",
      requirements: ["Blood pressure < 140/90", "Age > 40"],
      reward: "100 $SYNAPSE",
      needsSubset: false,
    },
  ];

  // Mock patient attributes (in real: derived from AI diagnostics or records)
  const patientAttributes = {
    bmi: 28,
    age: 45,
    hasDiabetes: false,
    systolicBP: 135,
  };

  const generateMockZKProof = (requirements: string[]) => {
    // Simulate zk proof: check if patient meets all
    const meetsAll = requirements.every((req) => {
      if (req.includes("BMI < 30")) return patientAttributes.bmi < 30;
      if (req.includes("Age 18-65")) return patientAttributes.age >= 18 && patientAttributes.age <= 65;
      if (req.includes("Age > 40")) return patientAttributes.age > 40;
      if (req.includes("No diabetes")) return !patientAttributes.hasDiabetes;
      if (req.includes("Blood pressure < 140")) return patientAttributes.systolicBP < 140;
      return false;
    });

    setZkProofResult(meetsAll ? "Proof valid – Eligible!" : "Proof invalid – Not eligible");
    return meetsAll;
  };

  const handleMarketplaceShare = (request: any) => {
    const eligible = generateMockZKProof(request.requirements);
    if (eligible) {
      setSelectedRequest(request);
      setRecipient(request.partner);
      setIsModalOpen(true);
    }
  };

  const handleShare = () => {
    console.log("Sharing with:", recipient, "Request:", selectedRequest);
    alert(`Shared successfully! Rewarded ${selectedRequest?.reward || "0 $SYNAPSE"}`);
    // In real: trigger on-chain reward mint
    setIsModalOpen(false);
    setRecipient("");
    setSelectedRequest(null);
    setZkProofResult(null);
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
          Share Records & Marketplace
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("direct")}
            className={`px-6 py-2 rounded-l-lg ${activeTab === "direct" ? "bg-teal-600 text-white" : "bg-gray-200"}`}
          >
            Direct Share
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`px-6 py-2 rounded-r-lg ${activeTab === "marketplace" ? "bg-teal-600 text-white" : "bg-gray-200"}`}
          >
            Marketplace
          </button>
        </div>

        {activeTab === "direct" && (
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 mx-auto block"
          >
            Share a Record Directly
          </motion.button>
        )}

        {activeTab === "marketplace" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketplaceRequests.map((req) => (
              <motion.div
                key={req.id}
                className="bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
              >
                <h3 className="text-xl font-semibold text-indigo-700">{req.partner}</h3>
                <p className="text-gray-600 mt-2">{req.type}</p>
                <ul className="mt-4 space-y-1">
                  {req.requirements.map((r, i) => (
                    <li key={i} className="text-sm text-gray-700">• {r}</li>
                  ))}
                </ul>
                <p className="mt-4 font-bold text-teal-600">Reward: {req.reward}</p>
                <button
                  onClick={() => handleMarketplaceShare(req)}
                  className="mt-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 w-full"
                >
                  Prove Eligibility (zk)
                </button>
                {zkProofResult && selectedRequest?.id === req.id && (
                  <p className={`mt-4 font-bold ${zkProofResult.includes("valid") ? "text-green-600" : "text-red-600"}`}>
                    {zkProofResult}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        <ShareModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setZkProofResult(null);
          }}
          onShare={handleShare}
          recipient={recipient}
          setRecipient={setRecipient}
          extraInfo={selectedRequest ? `For: ${selectedRequest.type} (Reward: ${selectedRequest.reward})` : undefined}
        />

        {/* Existing History & Analytics sections */}
        <motion.section className="mt-10 bg-white p-6 rounded-xl shadow-xl border border-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Sharing History</h2>
          {/* ... keep existing */}
        </motion.section>
      </div>
    </div>
  );
}