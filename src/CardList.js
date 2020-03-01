import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardArray = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            {cardArray}
        </div>
    );
}

export default CardList;