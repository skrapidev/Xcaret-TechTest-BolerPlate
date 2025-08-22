import { NavLink } from "react-router-dom";

interface BaseProps {
  children: React.ReactNode;
}
export const BaseComponent = ({ children }: BaseProps) => {
  return (
    <>
      <div>
        <nav style={{ display: "flex", padding: 0, margin: 0, gap: 15 }}>
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/aboutus" end>
            Acerca de nosotros
          </NavLink>
        </nav>
      </div>
      <div>{children}</div>
    </>
  );
};
