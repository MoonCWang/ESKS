import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';

class App extends Component {
    constructor() {
        super()
        this.state= {
            kitties: [],
            searchfield: ''                  
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({kitties: users}));
    }

    onSearchChange = (event) => { // custom use arrow functions
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { kitties, searchfield } = this.state;
        const filteredKitties = kitties.filter(x => {
            return x.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !kitties.length ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f0'>Cute Kitties</h1>
                    <SearchBar searchChange={this.onSearchChange}/>
                    <Scroll >
                        <CardList kitties={ filteredKitties }/>
                    </Scroll>
                </div>
            );
    }
}

export default App;