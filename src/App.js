import React, { useState } from 'react';
import './App.css';

function App() {
    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setDefinition("Word not found in the dictionary.");
            return;
        }
        
        const word = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
        if (word) {
            setDefinition(word.meaning);
        } else {
            setDefinition("Word not found in the dictionary.");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="App">
            <h1>Dictionary App</h1>
            <input 
                type="text" 
                placeholder="Search for a word..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Trigger search on Enter key press
            />
            <button onClick={handleSearch}>Search</button>
            <p>Definition: <span>{definition}</span></p>
        </div>
    );
}

export default App;
