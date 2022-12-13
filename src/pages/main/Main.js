import { Link } from "react-router-dom";
import RoutesCore from "../../RoutesCore";

function Main() {
    return <>
        <div>Main</div>
        {RoutesCore.length && RoutesCore.map(({path}, ind) => <>
        <Link key={ind} to={path}>{path}</Link>
        <br></br>
        </>)}
    </>
};

export default Main;