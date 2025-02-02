import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/explore">Explore</Link></li>
            </ul>
        </>
    )
}

export default Navbar