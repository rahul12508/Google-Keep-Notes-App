
import './App.css';

import NoteList from './components/NoteList';
import Bar from './components/Bar';
import { useState, useEffect } from 'react';

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      // id: Date.now() + "" + Math.floor(Math.random() * 78),
      id: [1,2,3,4,5,6,7,8,9],
      text: '',
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  }; 
  
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };


  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Bar addNote={addNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        // updateText={updateText}
      />
    </div>
  );
}


export default App;
