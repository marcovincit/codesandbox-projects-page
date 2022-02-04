import { useEffect, useRef } from "react";
import { styled } from "styles/stitches.config";



export const Canvas = styled("canvas", {
  maxWidth: "100vw",
  maxHeight: "100vh",

  // pointerEvents: "none",

  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",


});

export const Product = () => {

  const canvas = useRef();

  useEffect(()=>{
    const context = canvas.current.getContext("2d");

  const frameCount = 148;
  const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  );
  
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image()
img.src = currentFrame(1);
canvas.current.width=1158;
canvas.current.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}


window.addEventListener('scroll', () => {  
  const scrollTop = window.scrollTop;
  const maxScrollTop = 1080 * 13;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
  },[])

  

  return <Canvas ref={canvas}></Canvas>;
};
