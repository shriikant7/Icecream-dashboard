import React from "react";
const IcecreamImages = ({ icecreamid }) => {
  return (
    <img
      src={`../ice-cream-images/ice-cream-${icecreamid.toString()}.svg`}
      alt="nothing"
    />
  );
};
export default IcecreamImages;
