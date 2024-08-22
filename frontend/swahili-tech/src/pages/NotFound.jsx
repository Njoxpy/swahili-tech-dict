import { Link } from "react-router-dom"

function Notfound() {
    return(
        <div className="not-found">
            <h1 className="not-found-heading">Not Found</h1>
            <p className="not-found-paragraph">Sorry The page you were looking was not found, return to <Link to="/" className="not-found-link">Homepage</Link></p>
        </div>
    )
}

export default Notfound;