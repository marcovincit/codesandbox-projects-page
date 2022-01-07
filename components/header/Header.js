import { styled } from "styles/stitches.config";
import { Heading, Body } from "../typography";

const Section = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "3.8rem 4rem",

  "@large": {
    padding: "2.8rem 3rem",
  },
  "@medium": {
    padding: "3.6rem 3.2rem",
  },
  "@small": {
    padding: "2.8rem 1.5rem",
  },
});

const Menu = styled("nav", {
  display: "flex",
  gap: "3rem",
});

const Link = styled(Body, {
  display: "flex",
  gap: "3rem",
  "&:hover": {
    color: "$primary",
  },
});

export function Header() {
  return (
    <Section>
      <Link as="a" href="#" size={3}>
        Back
      </Link>
      <Menu>
        <Link as="a" href="#" size={3}>
          Pricing
        </Link>
        <Link as="a" href="#" size={3}>
          Sign In
        </Link>
      </Menu>
    </Section>
  );
}
