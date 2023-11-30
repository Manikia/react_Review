import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false)
    //below we are going to create a history object so we can get redirected after submitting
    const history = useHistory();
    
    const handleSubmit = (e) => {
        //the prevent default avoid the page to refresh when hitting submit
        e.preventDefault()
        //creating an object so it can be added to the db and we dont have to add an id since its automatically created when we run it
        const blog = {title, body, author}

        setIsPending(true)

        //now we are going to create a post request to add the submission
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
            // we pass a second argument where we tackle the data dn define the request sending and sends the properties to the blogs argument we are passing
        }).then(() =>{
            console.log('new blog added')
            setIsPending(false)
            //so now that we submit it will go back one page instead of staying on the same page
            //history.go(-1)
            //we can do + or - to go to pages but if we want to go to home page then we have to use push
            history.push('/')
        })

        
    }

    return ( 
        <div className = "create">
            <h2>Add new Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    >
                </textarea>  
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value = 'mario'>mario</option>
                    <option value = 'yoshi'>yoshi</option>
                    
                </select>
                {/* we will only output the below when the pending is either true or not */}
                {!isPending && <button>Add blog</button>}
                {isPending && <button>ADDING BLOG..</button>}
                
            </form>
        </div>
     );
}
 
export default Create;