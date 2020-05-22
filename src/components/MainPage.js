import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SeachBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import "./MainPage.css";

export const filteredRobots = (robots, search) => {
  return robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });
};

const MainPage = ({
  search,
  onSearchChange,
  onRequestRobots,
  robots,
  isPending,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, []);

  return isPending ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SeachBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots(robots, search)} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default MainPage;
