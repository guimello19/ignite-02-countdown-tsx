import { HeaderContainer } from './styles.ts'
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Index">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
