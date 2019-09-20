import React, {Component}from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:["accounts"],
            isLoaded: false
            isLoaded: false,
            items: []
        }
    }        

@@ -26,24 +26,27 @@ class App extends Component {

    render(){

        var { isLoaded, items} = this.state;
        //var { isLoaded, items} = this.state;

        if(!isLoaded) {
        if(false) {
            return <div>Loading...</div>
        }

        else {

            console.log('this.state', Object.keys(this.state.items))

            return (
                <div className="App">

                    <ul>
                    <p>hi</p>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} | {item.accounts}

                <div className="App">
                   <ul>
                        {Object.keys(this.state.items).map(item => (
                            <li>
                                {item}:{JSON.stringify(this.state.items[item])}
                            </li>
                        ))};
                        ))}

                    </ul>

                </div>
            );
        }
    }
}
export default App; 