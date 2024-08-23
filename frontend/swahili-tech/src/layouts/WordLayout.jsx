import { Outlet } from "react-router-dom";

function WordDetailsLayouts(){
    return(
        <div>
            <h3>Word Detail</h3>

            <Outlet />
        </div>
    )
}

export default WordDetailsLayouts;