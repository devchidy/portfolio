import { useState, useCallback } from "react";

interface UseLoaderReturn {
  showLoader: () => void;
  hideLoader: () => void;
  isVisible: boolean;
}

export const useLoader = (duration: number = 2000): UseLoaderReturn => {
  const [isVisible, setIsVisible] = useState(false);

  const showLoader = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    showLoader,
    hideLoader,
    isVisible,
  };
};
