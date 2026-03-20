# AlgoSensei 🥋

Your AI-powered mentor for Data Structures & Algorithms. 

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff88?style=for-the-badge&logo=vercel&logoColor=black)](#) <!-- Add your live link here -->

![AlgoSensei Screenshot](/public/og-image.png) <!-- Add a real screenshot here -->

## Why I Built This
After grinding through 200+ LeetCode problems to prep for software engineering interviews, I realized there's a huge gap in how we learn DSA. Staring at raw solutions or watching 40-minute videos often feels passive. 

I wanted a tool that **doesn't spoon-feed answers**. I built AlgoSensei to simulate the experience of pair-programming with a Staff Engineer — it asks Socratic questions, nudges you toward patterns (like Sliding Window or Two Pointers), and demands rigour in Big-O complexity analysis before ever showing you code.

## Tech Stack
- **Framework:** Next.js 14 (App Router, Edge Runtime)
- **Styling:** Tailwind CSS (custom hacker/terminal theme)
- **AI / LLM:** Google Gemini API (`gemini-1.5-flash`) via `@google/generative-ai`
- **Markdown Rendering:** `react-markdown`, `remark-gfm`, and `react-syntax-highlighter`
- **Typography:** JetBrains Mono & Sora (Google Fonts)

## Features
- 🧠 **Socratic Problem Solving:** Guides you through problems stage-by-stage (Understand → Pattern → Approach → Code).
- ⚡ **Edge Streaming Responses:** Real-time token streaming via Vercel Edge functions.
- 🎨 **Code Highlighting:** Full syntax highlighting and copy-to-clipboard functionality for Python/JS snippets.
- 📱 **Mobile-First UI:** Responsive 100dvh chat interface with pinned inputs and bottom auto-scroll.

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/algosensei.git
   cd algosensei
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

## Deployment Notes
This project is configured out-of-the-box for [Vercel](https://vercel.com). Because the AI route uses the Edge runtime, ensure the `GOOGLE_API_KEY` is added to your Vercel Project Environment Variables.

---
*Built with 💚 and Google Gemini*
