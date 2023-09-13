import ChannelList from "@/components/ChannelList";
import Chat from "@/components/Chat";
import { useState } from "react";

const channels = [
  { name: "BlueGamer1", isRead: true, iconUrl: "https://i.pinimg.com/564x/9a/28/7e/9a287e9849a5f2b199f1c6767bf19583.jpg" },
  { name: "funny", isRead: true, iconUrl: "https://i.pinimg.com/564x/43/38/de/4338def85708dc3e9dfa71cf6c1f6dd2.jpg" },
  { name: "GamezAwesome4", isRead: true, iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL2zfzjd7-LFklh4m0qTBNQE0DocDGoezIQk9lxNc&s" },
];

export default function Home() {
  const [selectedChannel, setSelectedChannel] = useState(channels[0].name);
  const [messages, setMessages] = useState({});

  const handleSelectChannel = (channelName) => {
    setSelectedChannel(channelName);
  };

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChannel]: [...(prevMessages[selectedChannel] || []), newMessage],
    }));
  };

  const handleDeleteMessage = (messageIndex) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChannel]: prevMessages[selectedChannel].filter((_, index) => index !== messageIndex),
    }));
  };

  return (
    <div className="chat-wrapper">
      <ChannelList
        channels={channels}
        onSelectChannel={handleSelectChannel}
        selectedChannel={selectedChannel}
      />
      <Chat
        channelName={selectedChannel}
        messages={messages[selectedChannel] || []}
        onSendMessage={handleSendMessage}
        onDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
}