import React from 'react';

const SmallLoader = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 w-full h-2/3">
      <div className="w-6 h-6 rounded-full bg-white animate-bounce [animation-delay:.7s]" />
      <div className="w-6 h-6 rounded-full bg-white animate-bounce [animation-delay:.3s]" />
      <div className="w-6 h-6 rounded-full bg-white animate-bounce [animation-delay:.7s]" />
    </div>
  );
}

export default SmallLoader;
