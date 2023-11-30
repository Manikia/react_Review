import {useHistory, useParams} from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    //we use params so we can get the deconstructure of the ID
    //then from there we can use them in another function and such
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory()

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }

    return ( 
       <div className="blog-details">
        {isPending&&<div> Loading...</div>}
        {error&&<div> {error}</div>}
        {blog&&(
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>

                {/* now we will create a button to delete a blog if we need to */}
                <button onClick={handleClick}>delete</button>
            </article>
            )}
       </div>
     );
}
 
export default BlogDetails;