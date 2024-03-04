import { HeaderWrapper, ActionButton } from "./header.style";
import { Logo } from "../Logo.style";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>SecureAuth</Logo>
      <ActionButton>
        Login <div />
      </ActionButton>
    </HeaderWrapper>
  );
}
