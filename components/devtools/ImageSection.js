import { styled } from "styles/stitches.config";

export const ImageSection = styled("div", {
    
    display: "none",
    alignItems: "center",
    overflow: "hidden",
    pointerEvents: "none",
    position: "relative",
  
    "@medium": {
     
      overflow: "initial",
      display: "flex",
    },
  
    variants: {

        

      center: {
        true: {
            "@medium": {
                
                justifyContent: "center",
              },
         
        },
      },
  
      left: {
        true: {
        
          "@medium": {
           
            justifyContent: "flex-end",
  
          },
        },
      },
    },
  });