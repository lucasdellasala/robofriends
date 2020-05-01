import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";


class App extends Component {
    
    constructor(){
        super();
        this.state= {
            robots: [],
            searchfield: "",
        }
    }
    
    componentDidMount(){
        var misCabeceras = new Headers();
        var miLista;
        var miInit = {
            method: "GET",
            headers: misCabeceras,
            mode: "cors",
            cache: "default"
        };
        fetch("https://thingproxy.freeboard.io/fetch/https://jsonplaceholder.typicode.com/users", miInit)
        // .then(function(response) {
        //     if(response.ok) {
        //       response.blob().then(function(miBlob) {
        //         var objectURL = URL.createObjectURL(miBlob);
        //         miLista.src = objectURL;
        //       });
        //     } else {
        //       console.log('Respuesta de red OK pero respuesta HTTP no OK');
        //     }
        //   })
        //   .catch(function(error) {
        //     console.log('Hubo un problema con la petición Fetch:' + error.message);
        //   });
        .then(response => response.json())
        .then(users => this.setState( { robots : users} ));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
     
    }

    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
        <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/> 
            <Scroll>
                <CardList robots={filteredRobots}/> 
            </Scroll>                
        </div>
        
    }
}

export default App;