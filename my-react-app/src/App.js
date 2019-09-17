import React, {Component}from 'react';

import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
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

        //var { isLoaded, items} = this.state;

        if(false) {

            return <div>Loading...</div>
        }

        else {

            console.table('this.state', Object.keys(this.state.items))

            return (


                <div className="App">
                   <ul>
                        {Object.keys(this.state.items).map(item => (
                            <li>
                                {item}:{JSON.stringify(this.state.items[item])}
                            </li>
                        ))}

                    </ul>
                    
                </div>
            );
        }
    }
}
export default App;
