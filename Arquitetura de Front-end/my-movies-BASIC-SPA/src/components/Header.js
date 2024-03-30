// import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <HeaderContainer>
      <h1>My Movies</h1>
      <MainMenu/>
    </HeaderContainer>
)