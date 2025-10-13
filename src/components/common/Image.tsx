import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ItemProps {
  src?: string;
}

const Image: React.FC<ItemProps> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");

    img.onload = () => {
      setIsLoaded(true);
    };

    if (src) {
      img.src = src;
    }

    // Optionally, handle errors
    img.onerror = () => {
      console.error("Error loading image");
      setIsLoaded(false);
    };
  }, [src]);

  return isLoaded ? (
    <img src={src} alt="" />
  ) : (
    <Blurhash
      hash="L46u9gV?8_j^%jxBRPWA00oI?bof"
      width="100%"
      height="100%"
      resolutionX={32}
      resolutionY={32}
      punch={1}
    />
    // You can use any loading placeholder here
  );
};

export default Image;
