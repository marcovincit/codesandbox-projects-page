import Hero from "components/hero";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { Features } from "components/features";
import { styled } from "styles/stitches.config";

export default function Home() {
  return (
    <>
      <Header />
      {/* <img
        style={{
          position: "fixed",
          top: 0,
          left: 0,

          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        src="/grid.png"
      /> */}
      <Features />
      <Hero />
      <Footer />
    </>
  );
}
