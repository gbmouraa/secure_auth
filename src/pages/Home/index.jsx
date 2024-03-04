import { HomeContainer } from "./home.style";
import { MainWrapper } from "../../components/MainWrapper.style";
import SignUp from "../../components/SignUp";

export default function Home() {
  return (
    <HomeContainer>
      <MainWrapper>
        <SignUp />
      </MainWrapper>
    </HomeContainer>
  );
}
