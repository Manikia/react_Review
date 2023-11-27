import { useState, useEffect } from "react"
import BlogList from "./BlogList";


//useEffect runs a functions after every component change

const Home = () => {
    //creating useState since they will change
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        {title: 'Welcome to party', body: 'lorem ipsum...', author: 'yoshi', id:2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3}
    ]);

    const [name, setName] = useState('mario');

    //to change the object in the page we have to use useState
    // //second part is what we use to change the useState
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () =>{
    //     setName('luigi')
    //     setAge(30)
    // }

    // // const handleClickAgain = (name) =>{
    // //     console.log('hello '+name)
    // // }

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        //this function runs after evey rerender
        console.log('user effect ran')
        console.log(name);

        //below empty array will only run function after eveey first load but if we want to change it then we can edit when we want the rendering to change
    }, [name]);
    return ( 
        
/* map method cycles through the array */
            
        <div className="home">
            {/* in here we are passing props and in the other file where we want to grab the call we will reference props and assign it to blobs */}
            <BlogList blogs={blogs} title="all blogs" handleDelete={handleDelete}/>
            <button onClick = {() => setName('luigi')}>Change name</button>
            <p>{name}</p>
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