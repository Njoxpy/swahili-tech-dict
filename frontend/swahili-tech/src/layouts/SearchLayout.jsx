import { Outlet } from "react-router-dom";

function SearchLayout(){
    return(
        <div>
            <h1>SearchLayout</h1>

            <Outlet />
        </div>
    )
}

export default SearchLayout;