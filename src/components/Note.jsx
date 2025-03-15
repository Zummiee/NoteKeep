import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div style={{backgroundColor: props.theme[1]}} className="note">
      <img className="note-pokemon-img" src={props.theme[2]} alt={props.theme[3]}/>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-icon-button" onClick={handleClick}>
        <DeleteIcon sx={{ color: props.theme[0] }} />
      </button>
    </div>
  );
}

export default Note;
