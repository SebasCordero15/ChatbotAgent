# Chatbot Agent | Premium AI Experience

Welcome to **Chatbot Agent**, a state-of-the-art conversational interface built with a focus on **Premium Design**, **Fluid Animations**, and **User Experience**. This project demonstrates a modern approach to AI interactions, utilizing a React-based frontend with glassmorphism aesthetics and high-performance routing.

![Main Interface](https://raw.githubusercontent.com/SebasCordero15/ChatbotAgent/main/preview.png)

## Key Features

- **Premium Glassmorphism UI**: A sleek, modern interface with backdrop filters and translucent elements.
- **Fluid Animations**: Smooth transitions and interactive elements powered by **Framer Motion**.
- **Smart AI Interaction**: Context-aware mock response logic that simulates a real-time AI conversation.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **Vite Powered**: Ultra-fast development and build process.
- **Tailwind CSS**: Utility-first styling with a custom-crafted color palette.

## Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SebasCordero15/ChatbotAgent.git
   cd ChatbotAgent
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

### API Setup

This project uses the **Google Gemini API**. To make it functional:

1.  Go to [Google AI Studio](https://aistudio.google.com/) and create a free API key.
2.  In the project root, find the `.env` file.
3.  Replace `YOUR_API_KEY_HERE` with your actual Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_actual_key_here
    ```

## 📂 Project Structure

```
ChatbotAgent/
├── src/
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks (e.g., useChat)
│   ├── types/         # TypeScript definitions
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles & Tailwind directives
├── public/            # Static assets
├── tailwind.config.js # Styling configuration
└── vite.config.ts     # Vite configuration
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to improve the agent.

---

Built with ❤️ for an **Excellente Project**.
