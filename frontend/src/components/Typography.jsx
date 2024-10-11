import React from 'react';

const Typography = ({ children, className }) => {
  return (
    <div className={`text-lg font-medium text-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export default Typography;
