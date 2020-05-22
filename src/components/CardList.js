import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map((user) => {
        const { id, name, email } = user;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
}

export default CardList;
