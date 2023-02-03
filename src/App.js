import "./styles.css";
import React, { Component } from "react";
import { firestore } from "./firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    firestore.collection("details").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ info: products, loading: false });
    });
  }

  render() {
    const { info } = this.state;
    console.log(info);

    return (
      <div>
        {info.map((i) => (
          <>
            <p>{i.name}</p>
            <p>{i.email}</p>
            <p>{i.password}</p>
          </>
        ))}
      </div>
    );
  }
}

export default App;
