import {Link} from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;

//this component is created to show a 404 page if another route is trying to access and then shows link to be redirected