import { Button } from "@mui/material";
import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import DeleteIcon from "@mui/icons-material/Delete";
import Dropdown from "../Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { _id, title } = props.card;

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, _id)}
        onDragEnter={() => props.dragEntered(props.boardId, _id)}
        onClick={() => setShowModal(true)}
      >
        <div className="card_top">
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Button
                class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(_id)}><DeleteIcon />Delete</p>
              </Button>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
      </div>
    </>
  );
}

export default Card;
