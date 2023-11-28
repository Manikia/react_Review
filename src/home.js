import BlogList from "./BlogList";
import useFetch from "./useFetch";

//json-server lets us quickly set up RESTful API using json file as the data source
// npx json-server --watch data/db.json --port 8000

//we also remove deletehandler so we can pass it through the db instead

//useEffect runs a functions after every component change

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        
/* map method cycles through the array */
            
        <div className="home">

            {error && <div>{error}</div>}
            {/* we are going to create a message that waits for pending and if its true it will show a loading screen but if not true it will not show it */}
            {isPending && <div>Loading...</div>}
            {/* in here we are passing props and in the other file where we want to grab the call we will reference props and assign it to blobs */}

            {/* bottom wont run until we have the data since when we run first it might give a null error */}
            {blogs && <BlogList blogs={blogs}/>}

            {/* <button onClick = {() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
            {/* filter will filter our output */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs"/> */}
        </div>
            /* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

            {/* the onclick will be fired up when clicking but if we were to add () for handleClick then it will run without us clicking which isnt what we want thats why we just reference the function instead of invoking it
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>{
                // passing in the function like we are doing will fire up when we clickagain the button which will pass the method wit the reference to mario
                handleClickAgain('mario')
            }}>Click Me again</button> */
        
        );
    }
 
export default Home;