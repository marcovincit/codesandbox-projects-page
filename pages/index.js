import { Hero, Intro, Streamlined, Header, Footer, Features } from "components";

export default function Home() {
  return (
    <>
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

      <Header />
      <Hero />
      <Intro />
      <Streamlined />

      <Features />

      <Footer />
    </>
  );
}
