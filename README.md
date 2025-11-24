# 0G-HealthAI

Welcome to **0G-HealthAI**, a decentralized AI-powered healthcare management application built on the 0G Modular Layer 1 blockchain. This project aims to revolutionize healthcare by making it a public good through secure, transparent, and intelligent data management using Next.js, Tailwind CSS, TypeScript, and 0G's innovative blockchain infrastructure.

- **Repository**: [https://github.com/Wadill/OG-HealthAI](https://github.com/Wadill/OG-HealthAI)

🚀 0G-HealthAI LIVE on MAINNET!
Contract: 0x1F0441f4aD7ddAf44187F780afc6AacdC270Bba7
Explorer: https://explorer.0g.ai/address/ 0x1F0441f4aD7ddAf44187F780afc6AacdC270Bba7

## What it Does
0G-HealthAI empowers patients and healthcare providers with a decentralized platform to store encrypted medical records, access AI-driven diagnostics, and share data securely via Intelligent NFTs (INFTs). It leverages 0G's modular services to ensure privacy, verifiability, and scalability.

## The Problem it Solves
This project addresses critical issues in traditional healthcare systems, including data privacy breaches, lack of patient control, and inaccessible real-time insights. By decentralizing data and integrating AI, it fosters trust and accessibility for all.

## Features
- Secure storage of medical records on 0G Storage.
- AI-powered health diagnostics using 0G Compute.
- Verifiable data sharing via smart contracts on 0G Chain.
- Real-time analytics with 0G Data Availability.
- INFTs for dynamic, transferable health profiles.

## Technologies Used
- **Frontend**: Next.js (React framework), Tailwind CSS (styling), TypeScript (type safety).
- **Blockchain**: 0G Chain (EVM-compatible), 0G Storage, 0G Compute, 0G Data Availability.
- **Development Tools**: Hardhat (smart contracts), Ethers.js (blockchain interaction), RainbowKit (wallet integration), 0G SDKs.
- **AI Integration**: 0G Compute for running diagnostic models.

## How We Built It
1. **Setup**: Initialized a Next.js project with TypeScript and Tailwind CSS.
2. **Smart Contracts**: Developed and deployed a Solidity contract for INFTs using Hardhat on 0G Chain.
3. **Frontend**: Created a responsive UI with wallet integration via RainbowKit.
4. **Backend**: Integrated 0G Storage for data and 0G Compute for AI inference via custom APIs.
5. **Testing**: Iteratively tested on the 0G testnet to ensure functionality.

## Roadmap
### Wave 1: Ideation and Initial Development
- Defined features and built a demo with encrypted data storage and INFT creation.
- Illustration: Flowchart of user journey (login → upload data → create INFT).

### Wave 2: MVP Development
- Added AI diagnostics on 0G Compute and data sharing via smart contracts.
- Enhanced UI with a chat interface and tested on 0G testnet.
- Illustration: Diagram of MVP workflow across 0G modules.

### Wave 3: Production-Ready Deployment
- Launched a live platform with free credits, a status dashboard, and chat-based analytics.
- Expanded to multi-chain support and deployed to 0G mainnet.
- Illustration: Mockup of the interface with chat panel and health chart.

### Wave 4: Scaling and Partnerships
- Aim for 100+ users and collaborate with healthcare networks.
- Plan for cross-chain interoperability and community AI tools.
- Illustration: Network diagram of 0G-HealthAI ecosystem.

## Challenges We Ran Into
- Navigating the limited 0G documentation for modular integration.
- Optimizing AI inference speed and cost on 0G Compute.
- Ensuring robust encryption for sensitive health data.

## What We Learned
- Mastered 0G’s modular architecture and its potential for healthcare.
- Gained insights into balancing compute resources and security.
- Discovered the transformative power of INFTs for health records.

## What's Next
- Expand to support additional blockchains (e.g., Ethereum, Polygon).
- Integrate advanced AI models for predictive analytics.
- Partner with healthcare providers and develop a mobile app.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Wadill/OG-HealthAI.git
   cd OG-HealthAI
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_0G_CHAIN_URL=<0G_TESTNET_RPC_URL>
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=<WALLET_CONNECT_PROJECT_ID>
   PRIVATE_KEY=<YOUR_METAMASK_PRIVATE_KEY>
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, please open an issue first to discuss.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the 0G team for their pioneering blockchain technology.
- Gratitude to the Wavehack community for inspiration and support.