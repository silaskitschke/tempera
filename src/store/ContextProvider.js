import React, { useContext, useState } from "react";

const CurrentPaintingContext = React.createContext();
const UpdatePaintingContext = React.createContext();

const AnimationVariantContext = React.createContext();

const animationVariant = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.5 } },
};

export function useAnimationVariantContext() {
  return useContext(AnimationVariantContext);
}

export function usePaintingContext() {
  return useContext(CurrentPaintingContext);
}

export function useUpdatePaintingContext() {
  return useContext(UpdatePaintingContext);
}

export function ContextProvider({ children }) {
  const [currentPainting, setCurrentPainting] = useState({});

  function changePainting(input) {
    setCurrentPainting(input);
  }

  return (
    <CurrentPaintingContext.Provider value={currentPainting}>
      <UpdatePaintingContext.Provider value={changePainting}>
        <AnimationVariantContext.Provider value={animationVariant}>{children}</AnimationVariantContext.Provider>
      </UpdatePaintingContext.Provider>
    </CurrentPaintingContext.Provider>
  );
}
