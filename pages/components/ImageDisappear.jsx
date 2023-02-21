import React, { useState, useEffect } from 'react';

const ImageDisappear = () => {
  const [showImage, setShowImage] = useState(true);
  const [showReplacement, setShowReplacement] = useState(false);

  const handleMouseMove = event => {
    if (event.clientX >= window.innerWidth - 750 && event.clientY <= 300) {
      setShowImage(false);
      setShowReplacement(true);
    }
  };

  useEffect(() => {
    if (showReplacement) {
      setTimeout(() => {
        setShowReplacement(false);
      }, 3000);
    }
  }, [showReplacement]);

  return (
    <div onMouseMove={handleMouseMove}>
      {showImage && (
        <img
          src="https://images.unsplash.com/photo-1641826091173-d157dc9ac30c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="Your image"
          style={{ 
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            margin: '0',
            zIndex: '1',
          }}
        />
        
      )}
      {showReplacement && (
        <img
          src="https://i.imgur.com/wtzSnUt.png"
          alt="Your replacement image"
          style={{ 
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            margin: '0',
            zIndex: '1',
        }}
        />
      )}
    </div>
  );
};

export default ImageDisappear;