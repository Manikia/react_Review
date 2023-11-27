
const BlogList = ({blogs, title, handleDelete}) =>{
    // so you know how we see that we are basically getting pieces of props below, well we can also do decontructoring where we can breakit all apart like above
//const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props, blogs)

    return ( 
    <div className="blog-list">
        <h2>{title}</h2>

        {blogs.map((blog) => (
            
        <div className="blog-preview" key = {blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
        ))} 
    </div>
    );
}
 
export default BlogList;