//import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


const Notes = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes); // Notes we get from props

    const handleSearch = () => {
        setFilteredNotes(
            notes.filter(note =>
                note.title.toLowerCase().includes(text.toLowerCase())
            )
        );
    };

    useEffect(handleSearch, [text, notes]); // Run handleSearch whenever text or notes change

    return (
        <section>
            <header className="notes__header">
                {!showSearch && <h2>My Notes</h2>}
                {showSearch && (
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Keyword..."
                    />
                )}
                <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>{
                    showSearch ? <IoMdClose /> : <CiSearch />}
                </button>
            </header>
            <div className="notes__container">
                {filteredNotes.length === 0 && <p className="empty__notes"> No notes found</p>}
                {filteredNotes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
            <Link to="/create-note" className="btn add__btn">
                <BsPlusLg />
            </Link>
        </section>
    );
};

export default Notes;
