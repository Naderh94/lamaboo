import React, { useState, useEffect } from 'react';

const ImageDisappear = () => {
  const [showImage, setShowImage] = useState(true);
  const [showReplacement, setShowReplacement] = useState(false);
  const [imagesShown, setImagesShown] = useState(false);

  const handleMouseMove = event => {
    const imageElement = document.querySelector('img');
    const imageRect = imageElement.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
    const imageTop = imageRect.top;
    const imageLeft = imageRect.left;
    const imageRight = imageRect.right;
    const imageBottom = imageRect.bottom;

    if (
      event.clientX >= imageLeft + imageWidth * 0.5 - 50 &&
      event.clientX <= imageRight - imageWidth * 0.5 + 50 &&
      event.clientY >= imageTop + imageHeight * 0.5 - 240 &&
      event.clientY <= imageBottom - imageHeight * 0.5 + 0
    ) {
      setShowImage(false);
      setTimeout(() => {
        setShowReplacement(true);
      }, 700);
    }
  };

  useEffect(() => {
    if (showReplacement) {
      setTimeout(() => {
        setShowReplacement(false);
        setImagesShown(true);
      }, 4300);
    }
  }, [showReplacement]);

  const styles = {
    container: {
      position: 'fixed',
      top: '1px',
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: '0',
      opacity: imagesShown ? '0' : '1',
      transition: 'opacity 1s ease-in-out',
      zIndex: '1',
      backdropFilter: imagesShown ? 'none' : 'blur(10px)',
      pointerEvents: imagesShown ? 'none' : 'all',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      maxWidth: '100%', // set the max-width of the image to 100%
      maxHeight: '100%',
      opacity: showImage ? '1' : '0',
      transition: 'opacity 1s ease-in-out',
      zIndex: '1',
    },
    replacementImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      maxWidth: '100%', // set the max-width of the image to 100%
      maxHeight: '100%',
      opacity: showReplacement ? '1' : '0',
      transition: 'opacity 1s ease-in-out',
      zIndex: '1',
    },
  };

  return (
    <>
      {imagesShown ? null : (
        <div style={styles.container} onMouseMove={handleMouseMove}>
          <img
            src="https://i.imgur.com/1u6fSzJ.jpg"
            alt="Your image"
            style={styles.image}
          />
          <img
            src="https://i.imgur.com/wtzSnUt.png"
            alt="Your replacement image"
            style={styles.replacementImage}
          />
        </div>
      )}
    </>
  );
};

export default ImageDisappear;