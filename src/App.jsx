import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import OutputView from './components/OutputView';
import InputArea from './components/InputArea';

export default function App() {
    // Placeholder state for the generated code.
    const [generatedCode, setGeneratedCode] = useState({
        jsx: `function LoginForm() {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-slate-400 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-700 border-slate-600 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-slate-400 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-700 border-slate-600 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}`,
        css: `/* All styling is handled by Tailwind CSS utility classes.
  No custom CSS is needed for this component.
*/`
    });

    const handleNewChat = () => {
        console.log("Starting a new chat session...");
        // Here you would clear the state or create a new session via API
    };

    const handleSelectSession = (sessionId) => {
        console.log(`Loading session: ${sessionId}`);
        // Here you would fetch the data for the selected session
    };

    const handleSendMessage = (message) => {
        console.log("Sending message to AI:", message);
        // Here you would make the API call to your backend
    };

    return (
        <div className="flex h-screen bg-gray-800 text-white font-sans">
            <Sidebar onNewChat={handleNewChat} onSelectSession={handleSelectSession} />
            <main className="flex-1 flex flex-col">
                <ChatView />
                <OutputView generatedCode={generatedCode} />
                <InputArea onSendMessage={handleSendMessage} />
            </main>
        </div>
    );
}
