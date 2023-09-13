import { useState } from "react";
import TRASHICON from "../../public/trash_icon_default.svg"
import ROKA from "../../public/assets/roka.svg"
import CHATICON from '../../public/assets/chat_icon.svg'


export default function Chat({ channelName, messages, onSendMessage, onDeleteMessage }) {
    const [newMessage, setNewMessage] = useState("");
  
    const sendMessage = () => {
        if (newMessage.trim() !== "") { // Prevent sending empty messages
            onSendMessage(newMessage);
            setNewMessage(""); // Clear the input field
        }
    };
  
    return (
        <div className="chat">
            <div className="chat-text-wrapper">
                <div className="chat-icon">
                    <CHATICON style={{ objectFit: "contain", width: "100%", height: "100%"}}/>
                </div>
                <h2 className="chat-text-title">{channelName}</h2>
            </div>

            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <div className="message-me-icon">
                            <ROKA style={{ objectFit: "contain", width: "100%", height: "100%"}}/>
                        </div>
                        <div>
                            <h1 className="message-me-profile">CoconutLover2</h1>
                            <p>{message}</p>
                        </div>
                        <button onClick={() => onDeleteMessage(index)} className="del-btn">
                            <TRASHICON style={{ objectFit: "contain", width: "100%", height: "100%"}}/>
                        </button>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="@message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage} className="send-btn">Send</button>
            </div>
        </div>
    );
}