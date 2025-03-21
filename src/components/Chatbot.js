import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const apiKey = "AIzaSyBMKXk3fFfPzLyRX_ar4WUduKygkZiZj1w";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [[...messages], { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: input }] }] }),
            });

            const data = await response.json();
            const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

            setMessages([...newMessages, { sender: "bot", text: botMessage }]);
        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages([...newMessages, { sender: "bot", text: "Sorry, something went wrong." }]);
        }
    };

    return (
        <div>
            <div className="chatbot-icon" onClick={() => setIsOpen(true)} style={{ display: isOpen ? "none" : "flex" }}>
                💬
            </div>

            <div className="chatbot-container" style={{ display: isOpen ? "flex" : "none" }}>
                <div className="chatbot-header">
                    <span>Chatbot AI</span>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                </div>
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chatbot-input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
