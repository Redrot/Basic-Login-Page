import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {user: '', password: '', submitted: false};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({submitted: true});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>TIME TO LOG IN!</h2>
                </div>
                <p> </p>
                <div>
                    {!this.state.submitted ? (
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Username:
                                    <input type = "text" value = {this.state.user} onChange={(event) => this.setState({user: event.target.value})} />
                                </label>
                                <label>
                                    Password:
                                    <input type = "text" value = {this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                                </label>
                                <input type="submit" value ="Enter" />
                            </form>
                        </div>
                    ) : (
                        <div>
                            You have logged in, {this.state.user}, your password is {this.state.password}
                        </div>
                    )}
                </div>
            </div>


        );
    }

}



export default App;
