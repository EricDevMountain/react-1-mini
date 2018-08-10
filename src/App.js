import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [], picture: "", name: "" };
  }

  updatePicture = val => this.setState({ picture: val });
  updateName = val => this.setState({ name: val });
  addFriend = () => {
    const { friends, picture, name } = this.state;
    let letFriends = friends.slice();
    letFriends.push(name);

    this.setState({ friends: letFriends, picture: "", name: "" });
  };

  render() {
    let list = this.state.friends.map((e, i, arr) => {
      return <div>{e}</div>;
    });

    return (
      <div className="App">
        Picture:
        <input
          onChange={e => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />
        Name:
        <input
          onChange={e => this.updateName(e.target.value)}
          value={this.state.name}
        />
        <button onClick={() => this.addFriend}>Add Friend</button>
        {list}
      </div>
    );
  }
}

export default App;
