import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [dots, setDots] = useState('');
    
      useEffect(() => {
        const interval = setInterval(() => {
          setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : '.'));
        }, 500); // Change dots every 500ms
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, []);

    const apiKey = "AIzaSyBMKXk3fFfPzLyRX_ar4WUduKygkZiZj1w";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");
        setIsTyping(true); // Show "..." while bot is typing

        setTimeout(async () => {
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
            } finally {
                setIsTyping(false); // Hide "..." after response
            }
        }, 3000); // Simulating a 3-second typing delay
    };

    return (
        <div>
            {/* Chatbot Toggle Button */}
            <div className="chatbot-icon" onClick={() => setIsOpen(true)} style={{ display: isOpen ? "none" : "flex" }}>
                💬
            </div>

            {/* Chatbot Container */}
            <div className="chatbot-container" style={{ display: isOpen ? "flex" : "none" }}>
                <div className="chatbot-header">
                    <span>Chatbot</span>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                </div>
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && <div className="message bot">Wait{dots}</div>} {/* Typing Indicator */}
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
