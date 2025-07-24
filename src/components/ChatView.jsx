import React from 'react';

const ChatView = () => {
    // Placeholder chat messages - this will eventually come from your state
    return (
        <div id="chat-container" className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-start mb-4">
                <div className="max-w-[80%] bg-gray-700 p-4 rounded-lg">
                    <p>Create a simple, modern login form.</p>
                </div>
            </div>
            <div className="flex justify-end mb-4">
                <div className="max-w-[80%] bg-blue-600 p-4 rounded-lg">
                    <p>Sure, here is a login form component using Tailwind CSS.</p>
                </div>
            </div>
        </div>
    );
};

export default ChatView;