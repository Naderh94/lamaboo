import React, { useRef, useState, useEffect } from "react";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  useEffect(() => {
    const { current } = containerRef;
    const handleWheel = (event) => {
      if (!isScrollEnabled) {
        event.preventDefault();
        current.scrollLeft += event.deltaY;
      }
    };
    current.addEventListener("wheel", handleWheel, { passive: false });
    return () => current.removeEventListener("wheel", handleWheel);
  }, [isScrollEnabled]);

  const handleMouseEnter = () => {
    setIsScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setIsScrollEnabled(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        overflowX: "scroll",
        display: "flex",
        flexDirection: "row",
        whiteSpace: "nowrap",
        width: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="outer-wrapper">
        <div className="wrapper">
          <div
            className="slide one"
            style={{ borderRadius: "3px", padding: "10px" }}
          >
            <div className="first-image">
              


            </div>
            <h1 className="flex items-topcenter justify-center mt-2 bg-fixed bg-center bgcover custom-reasons">
              REASONS
            </h1>
          </div>
          <div
            className="slide two"
            style={{ borderRadius: "3px", padding: "10px" }}
          >
            <h1 className="flex items-topcenter justify-center mt-2 bg-fixed bg-center bgcover custom-i">
              I
            </h1>
          </div>
          <div
            className="slide three"
            style={{ borderRadius: "3px", padding: "10px" }}
          >
            <h1 className="flex items-topcenter justify-center mt-2 bg-fixed bg-center bgcover custom-love">
              LOVE
            </h1>
          </div>
          <div
            className="slide four"
            style={{ borderRadius: "3px", padding: "10px" }}
          >
            <h1 className="flex items-topcenter justify-center mt-2 bg-fixed bg-center bgcover custom-you">
              YOU
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;