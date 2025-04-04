import React, { useState } from "react";

const Dashboard = ({ user }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Ask me anything about your GitHub repositories." }
  ]);
  const [input, setInput] = useState("");

  // Function to handle user input
  const handleSendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await fetch(`/api/github?query=${encodeURIComponent(input)}`);
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("❌ API Error:", errorMessage);
        setMessages([...newMessages, { sender: "bot", text: "❌ Failed to fetch data!" }]);
        return;
      }
  
      const data = await response.json();
      console.log("✅ API Response:", data);
  
      setMessages([...newMessages, { sender: "bot", text: data.message + "\n" + data.repositories.map(repo => repo.text).join("\n\n") }]);
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      setMessages([...newMessages, { sender: "bot", text: "❌ An unexpected error occurred!" }]);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome, {user?.user_metadata.full_name}!
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
        Manage your repositories, track changes, and integrate with Git seamlessly.
      </p>

      {/* Chatbot UI */}
      <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg mt-6">
      <div className="h-64 overflow-y-auto p-2 border-b border-gray-700">
  {messages.map((msg, index) => (
    <div 
      key={index} 
      className={`p-2 my-2 rounded-lg ${
        msg.sender === "bot" ? "bg-gray-700" : "bg-blue-600 text-white"
      } whitespace-pre-line`} // 👈 This makes sure formatting stays!
    >
      {msg.text}
    </div>
  ))}
</div>


        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow p-2 bg-gray-700 rounded-l-lg focus:outline-none"
            placeholder="Ask about your GitHub..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSendMessage} className="bg-blue-600 px-4 py-2 rounded-r-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
