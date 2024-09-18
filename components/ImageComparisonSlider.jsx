// components/ImageComparisonSlider.js
import React from "react";
import CompareImage from "react-compare-image";

const ImageComparisonSlider = ({ beforeImage, afterImage }) => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <CompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        sliderLineWidth={4} // Customize the slider appearance
        sliderPositionPercentage={0.5} // Starting position of the slider (50% by default)
        leftImageCss={{
          objectFit: "contain",
          background: "white",
        }}
      />
    </div>
  );
};

export default ImageComparisonSlider;
