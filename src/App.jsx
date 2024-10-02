//import React from 'react'
import { BrowserRouter, Routes, Route, json } from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
//import dummynotes from './dummy_notes'

import { useEffect, useState } from "react"
const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])//getting the note from the local storage and parsing it as a string and if it is empty then an empty string is enterered
 useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))

 },[notes])
 
  //console.log(notes);

  return (
        <main id="app">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Notes notes={notes}/>} />
                  <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
                  <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
                </Routes>
                </BrowserRouter>
        </main>
  )
}

export default App 