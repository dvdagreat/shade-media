import { NavLink } from "react-router";

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      
      <NavLink to="/list" end>
        List
      </NavLink>
      
      <NavLink to="/create" end>
        Create
      </NavLink>
    </nav>
  )
}
