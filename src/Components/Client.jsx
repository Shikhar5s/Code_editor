import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
  return (
    <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-md shadow-md">
      <Avatar
        name={username}
        size="40"
        round={true}
        textSizeRatio={2}
        color="#3b82f6"  // Tailwind blue-500 hex
      />
      <span className="text-white font-medium truncate max-w-[100px]">{username}</span>
    </div>
  );
};

export default Client;
