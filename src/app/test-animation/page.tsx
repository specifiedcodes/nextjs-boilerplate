import React from 'react';

export default function TestAnimation() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-gray-100 rounded shadow fade-in">
        <h1 className="text-2xl font-bold">Hello, World!</h1>
        <p>This content fades in on load.</p>
      </div>
    </div>
  );
}