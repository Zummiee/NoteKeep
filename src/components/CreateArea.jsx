import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: "",
    theme: props.currentTheme
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd({
      title: note.title,
      content: note.content,
      theme: props.currentTheme
    });
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form style={{backgroundColor:props.currentTheme[1]}}>
      <img className="form-pokemon-img" src={props.currentTheme[2]} alt={props.currentTheme[3]}/>
        <input
          style={{backgroundColor:props.currentTheme[1]}} 
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          style={{backgroundColor:props.currentTheme[1]}}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button style={{backgroundColor:props.currentTheme[0]}} onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
