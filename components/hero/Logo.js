import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  height: "2.8rem",

  variants: {
    small: {
      true: {
        display: "none",
        "@medium": {
          display: "block",
        },
      },
    },
    large: {
      true: {
        "@medium": {
          display: "none",
        },
      },
    },
  },
});

export function Logo() {
  return (
    <>
      <Image src="/images/logo.svg" large />
      <Image src="/images/logo-small.svg" small />
    </>
  );
}
