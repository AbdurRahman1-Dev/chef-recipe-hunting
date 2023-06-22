import React from 'react';

const Loading = () => {
  return (
    <div className="animate-spin  w-16 h-16 border-8 border-current border-t-black text-blue-600 rounded-full text-center mx-auto" role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>
  );
};

export default Loading;