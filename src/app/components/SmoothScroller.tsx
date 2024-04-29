"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }: any) => {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
