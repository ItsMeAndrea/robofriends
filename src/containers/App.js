import React from "react";
import { connect } from "react-redux";

import MainPage from "../components/MainPage";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    search: state.searchRobots.search,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  return <MainPage {...props} />
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
