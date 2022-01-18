import React, { Component } from "react";

class Jokes extends Component {
    state = { joke: {} };
    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Any")
        .then(response => response.json())
        .then(json => this.setState({joke : json}));

    }

    render() {
        const {setup, delivery} = this.state.joke;
        return (
            <div>
                <h1>Joke of the Day</h1>
                <p>{setup}</p>
                <p><em>{delivery}</em></p>
            </div>
        );
    }
}

export default Jokes;