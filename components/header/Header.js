import { Container, Menu, Link } from "./styles";
import { Back } from "./icons";
import { AvatarContainer, Avatar } from "components";

export const Header = () => {
  return (
    <>
      <Container>
        <Link as="a" href="https://codesandbox.io/" size={3}>
          <Back />
          Back
        </Link>
        <Menu>
          <Link as="a" href="https://codesandbox.io/pricing" size={3}>
            Pricing
          </Link>
          {/* <Link
            as="a"
            href="https://codesandbox.io/signin?continue=https://projects.codesandbox.io/auth-test"
            size={3}
          >
            Sign In
          </Link> */}
        </Menu>
      </Container>

      <Avatar alt="User image" src="/avatars/3.jpg" />
    </>
  );
};
