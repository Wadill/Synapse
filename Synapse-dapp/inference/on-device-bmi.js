import * as tf from '@tensorflow/tfjs'; 

async function runOnDeviceBMI(heightCm, weightKg) {
  
  const bmi = weightKg / ((heightCm / 100) ** 2);
  const category = bmi < 30 ? 'under30' : 'over30';

  const tip = /* from models.json */ category === 'under30'
    ? 'Great BMI! Consider balanced diet to maintain.'
    : 'BMI elevated – suggest cutting carbs, add cardio.';

 
  const proofData = {
    claim: `BMI ${category}`,
    proof: "mock_zk_proof_hash_" + Date.now() 
  };

  // Store locally or emit to contract via wallet
  console.log("Local insight:", tip);
  return { tip, proofData };
}

// Usage in dapp (e.g., after record upload)
runOnDeviceBMI(175, 75).then(result => {
});