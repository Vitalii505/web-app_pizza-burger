import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="138" cy="141" r="115" />
      <rect x="-1" y="263" rx="3" ry="3" width="280" height="26" />
      <rect x="-1" y="305" rx="6" ry="6" width="280" height="84" />
      <rect x="-1" y="410" rx="3" ry="3" width="99" height="31" />
      <rect x="134" y="402" rx="22" ry="22" width="144" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
