import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../components/useCreateDate';

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate();
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(title && details){
      const note = {id: uuid(), title, details, date}
      ///add the notes to the notes array
      setNotes(prevNotes => [note, ...prevNotes])
      //redirect to home page
      navigate('/')
      //console.log(note);
    }

    
  }

  return (
    <section>
      <header className="create-note__header">
      <Link to="/" className="btn"><IoIosArrowBack /></Link>
      <button className="btn lg primary" onClick={handleSubmit}> Save </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder='Notes details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote