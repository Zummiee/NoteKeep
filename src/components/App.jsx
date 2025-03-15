import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const pikachuTheme = ["#FFD36E", "#FFF3B0", "/images/pikachu.png", "Pikachu"];
  const [currentTheme, setCurrentTheme] = useState(pikachuTheme);

  function handleThemeChange(theme) {
    setCurrentTheme(theme);
  }

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header onThemeChange={handleThemeChange} currentTheme={currentTheme} />
      <CreateArea onAdd={addNote} currentTheme={currentTheme} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            theme={noteItem.theme}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
