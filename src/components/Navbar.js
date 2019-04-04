import React from "react";
class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return( <nav>
            <a href="#">Home</a>
            
            <a href="#">Contact</a>
            <a href="#">Login</a>
        </nav>
       );
    }
}

export default Navbar;