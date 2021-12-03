import React from "react";
import Card from "../Card/Card";
import "./Board.css";

function Board(props) {
  return (
    <div className="board">
      <div className="board_header">
        <div className="board_header_title_more"></div>
      </div>

      <div className="board_cards custom-scroll">
        <p className="board_header_title">
          {props.board?.title}

          <span>{props.board?.cards?.length || 0}</span>
        </p>

        {props.board?.cards?.map((item) => (
          <Card
            key={item._id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
