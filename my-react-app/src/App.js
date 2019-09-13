import React, {Component}from 'react';

import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:["accounts"],
            isLoaded: false
        }
    }        

    componentDidMount() {
        fetch("https://api-v1.athletes.gg/users/7eaf20c8-ba0d-4570-a41d-f3087f6edbd0")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json, 
                })
            })
    }

    render(){

        var { isLoaded, items} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }

        else {

            return (
                <div className="App">

                    <ul>
                    <p>hi</p>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} | {item.accounts}
                            </li>
                        ))};
                    </ul>
                    
                </div>
            );
        }
    }
}
export default App;
