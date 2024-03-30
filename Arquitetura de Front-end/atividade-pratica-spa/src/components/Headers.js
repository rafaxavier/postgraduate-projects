import { NavLink } from "react-router-dom";
import { HeadersContainer } from "../styles/HeadersContainer";
import { NavContainer } from "../styles/NavContainer";
import { SubHeaderContainer } from "../styles/SubHeaderContainer";
import { Perfil } from "./Perfil";

export const Headers = () => (
  <HeadersContainer>
    <SubHeaderContainer>
      <NavContainer>
        <ul>
          <li><NavLink exact activeClassName="active" to='/' >Blog</NavLink></li>
          <li><NavLink activeClassName="active" to='/sobre' >Sobre</NavLink></li>
          <li><NavLink activeClassName="active" to='/descricao' >Descrição</NavLink></li>
        </ul>
      </NavContainer>

      <Perfil />
    </SubHeaderContainer>
  </HeadersContainer>
);

