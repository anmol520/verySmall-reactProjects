 import { useState } from "react";

function Notes() {
  
  const [notes, setNotes] = useState([]);

  
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  
  function addNote() {
    if (title.trim() === "" || note.trim() === "") return;

    const newNote = { title: title, note: note };
    setNotes([...notes, newNote]);

  
    setTitle("");
    setNote("");
  }

  
  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <>
      <h1>NotesBuddy</h1>
      <h2>Create, Update and Delete Notes</h2>

      {/* Inputs */}
      <input
        type="text"
        placeholder="Add title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      
      <div>
        {notes.map((n, index) => (
          <div key={index} style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
            <p><strong>{n.title}</strong></p>
            <p>{n.note}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notes;
