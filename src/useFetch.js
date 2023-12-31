import { useEffect, useState } from "react";


const useFetch = (url) => {
    //custom hooks need to first have use## for their names

    //creating useState since they will change
    const [data, setData] = useState(null);
    //so if we want to create like a loading screen while we wait for tghe fetch response we can do:
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

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

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

//get request
    
    useEffect(() => {
        //to view the loading for a bit we can use setTimeout
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}).then(response => {
                if(!response.ok){
                    throw Error('Could not fetch data for that resource')
                }
            return response.json();
            })
            .then(data => {
                console.log(data)
                setData(data)
                setIsPending(false)
            })
            //this will catch a network error and fire up
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }
                else{
                    setIsPending(false)
                    setError(err.message)
                }
            })
            }, [1000])

            //we get an internal error stating that a react state update on an unmounted component cant be performed and this is because we switch through our navs fast but to avoid this we add a return and the rest below and using an abort controller
            return() => abortCont.abort();
            //the above aborts every fetch and pauses it instead of trying to access it every time

        //this function runs after evey rerender
        // console.log('user effect ran')
        // console.log(name);

        //below empty array will only run function after eveey first load but if we want to change it then we can edit when we want the rendering to change
    }, [url]);
    return {data, isPending, error}
}
 
export default useFetch;