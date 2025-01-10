import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
        </ul>
    );
};

export default Menu;