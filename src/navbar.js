

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    // we do two curly braces because the first one is the dynamic call and the one inside is the object property
                    //so the below will style the new blog reference
                    // color:"white",
                    // backgroundColor: "#f1356d",
                    // borderRadius: '8px'
                }} >New Blog</a>

            </div>
        </nav>
     );
}
 
export default Navbar;