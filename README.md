# AlgoSensei 🥋

Your AI-powered mentor for Data Structures & Algorithms. 

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff88?style=for-the-badge&logo=vercel&logoColor=black)](https://algo-sensei-l5i2.vercel.app/)

## Overview
AlgoSensei is an intelligent, reactive web application designed to simulate the experience of pair-programming with a Staff Engineer. It goes beyond rote memorization by employing the Socratic method—guiding users to discover algorithmic patterns, demanding rigorous space-time complexity analysis, and offering scalable hints before revealing full solutions.

## ✨ Features & Capabilities

- 🧠 **Socratic Problem Solving:** Guides learners stage-by-stage (Understand → Pattern → Approach → Code) rather than spoon-feeding answers.
- 📐 **Complexity Analysis:** Enforces Big-O notation breakdowns for Time and Space on all code snippets.
- ⚡ **Real-Time Edge Streaming:** Utilitizes Next.js Edge Runtime to stream LLM tokens instantly, complete with a custom chunk-buffering queue to ensure smooth UI rendering (15ms throttle).
- 🎨 **Premium Terminal Interface:** A mobile-first, dark hacker-themed UI (`#0a0a0a` & `#00ff88`) built with Tailwind CSS, featuring custom native scrollbars and dynamic selection accents.
- **[Bonus] 📝 Markdown & Syntax Highlighting:** Renders complex AI payloads natively with `react-markdown`. Includes language-specific syntax highlighting and a seamless **Copy-to-Clipboard** feature.
- **[Bonus] 📱 Responsive 100dvh Layout:** Designed specifically to handle mobile browser chrome, pinning the input area cleanly to the bottom dynamically.

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (tailwindcss-animate, typography plugins)
- **AI / LLM:** Google Gemini API (`gemini-2.5-flash`) via `@google/generative-ai`
- **Parsers:** `react-markdown`, `remark-gfm`, `react-syntax-highlighter`
- **Typography:** JetBrains Mono (Code) & Sora (Headings) via Google Fonts
- **Deployment:** Vercel

## 📖 Why I Built This
After grinding through 200+ LeetCode problems to prep for software engineering interviews, I realized there's a massive gap in how we learn DSA. Staring at raw solutions or watching 40-minute conceptual videos often feels passive and disconnected from actual problem-solving.

I wanted a tool that forced active recall. AlgoSensei was built to be the mentor I needed: one that nudges you toward patterns like Sliding Window or Two Pointers, prevents you from cutting corners, and builds genuine algorithmic intuition.

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arnav-1456/AlgoSensei.git
   cd AlgoSensei
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```bash
   GOOGLE_API_KEY=your_actual_api_key_here
   ```
   > You can get a free Gemini API key from [aistudio.google.com](https://aistudio.google.com/app/apikey).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
