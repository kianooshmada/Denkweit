import "./App.css";
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <h1>Denkweit</h1>
          </div>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Launches />} />
              <Route exact path="/launch/:flight_number" element={<Launch />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
