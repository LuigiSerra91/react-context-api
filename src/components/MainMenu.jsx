import { NavLink } from "react-router-dom"
export default function MainMenu(){

    return (
        <>
        
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/chiSiamo">Chi siamo</NavLink>
            <NavLink to="/postlist">Postlist</NavLink>
            
        </nav>
        
        </>
    )
}