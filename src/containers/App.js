import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

class App extends Component {
    
    constructor(){
        super();
        this.state= {
            robots: []
        }
    }
    
    componentDidMount(){
        var myRequest = new Request('https://jsonplaceholder.typicode.com/users', { credentials: "include" });

        fetch(myRequest)
        .then(response => response.json())
        .then(users => this.setState( { robots : users} ));
    }

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? 
        <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/> 
            <Scroll>
                <CardList robots={filteredRobots}/> 
            </Scroll>                
        </div>
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);