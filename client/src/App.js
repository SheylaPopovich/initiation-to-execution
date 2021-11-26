// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React, { useState } from "react";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import PrivateRoute from "./PrivateRoutes";
import BootstrapNavbar from "./components/Navbar/Navbar";
import CreateProject from "./pages/CreateProject";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Projects from "./pages/Projects";
import "./App.css";
import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <PrivateRoute exact path="*" />
          </Switch>
          <>
            <div>
              <Projects />
            </div>
          </>
        </>
      </Router>

      <div className="app">
        <div className="app_nav">
          <h1>Kanban Board</h1>
        </div>
        <div className="app_boards_container">
          <div className="app_boards">
            <Board />
            <Board />
            <div className="app_boards_board">
            <Editable displayClass="app_boards_board_add"
            text="Add Board"
            placeholder="Enter board title" />
          </div>
          </div>
        </div>
      </div>

      <div className="sections"></div>
    </ApolloProvider>
  );
}

export default App;
