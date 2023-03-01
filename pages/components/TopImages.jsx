import React, { useRef, useState, useEffect } from "react";

const TopImages = () => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleWheel = (event) => {
    if (isHovering) {
      event.preventDefault();
      const { current } = containerRef;
      current.scrollLeft += event.deltaY;
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.style.overflow = "hidden";
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflowX: "auto",
        display: "flex",
        flexDirection: "row",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100%",
      }}
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="outer-wrapperimg">
        <div
          className="wrapperimg snaps-inline"
          style={{ borderRadius: "3px", padding: "10px", whiteSpace: "nowrap" }}
        >
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/IIOkqRI.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/86pAo8t.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img width={1} alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
          <div className="topimg">
          <picture>
              <img alt="..." loading="lazy" src="https://i.imgur.com/6acMnkD.jpg" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopImages;