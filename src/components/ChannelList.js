export default function ChannelList({ channels, onSelectChannel, selectedChannel }) {
    return (
        <div className="channel-list">
            {channels.map((channel, index) => (
                <div
                    key={index}
                    className={`channel-item ${selectedChannel === channel.name ? "selected" : ""}`}
                    onClick={() => onSelectChannel(channel.name)}
                >
                    <div className="channel-item-icon">
                        <img src={channel.iconUrl} style={{objectFit: "cover", height: "100%", width: "100%", borderRadius: "inherit"}}/>
                    </div>
                    <span>{channel.name}</span>
                    {/* {!channel.isRead && <span className="unread-indicator">Unread</span>} */}
                </div>
            ))}
      </div>
    );
}