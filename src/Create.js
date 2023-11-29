import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');

    return ( 
        <div className = "create">
            <h2>Add new Blog </h2>
            <form>
                <label>Blog title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required>
                </textarea>  
                <label>Blog Author: </label>
                <select>
                    <option value = 'mario'>mario</option>
                    <option value = 'yoshi'>yoshi</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;