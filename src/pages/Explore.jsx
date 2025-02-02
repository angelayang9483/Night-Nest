const shelters =
   [
      {
        "name": "Costco", 
        "location": "13463 Washington Blvd, Marina Del Rey, CA 90292" 
      },
      {
        "name": "Good Seed Shelter",
        "location": "6568 5th Ave, Los Angeles, CA 90043" 
      }, 
      {
        "name": "PATH - Hollywood",
        "location": "5627 Fernwood Ave, Los Angeles, CA 90028" 
      }
    ]

function Explore() {
    return (
        <>
        <h1>Explore</h1>
        <Search />
        </>
    )
}

import {useState} from 'react';

function Search(){
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const filteredResults = shelters.filter( (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setResults(filteredResults);
    };
    return(
        <>
        <input type="text" placeholder="Location" value ={searchQuery} onChange = { (e) => setSearchQuery(e.target.value)}/>
        <button id="searchButton" onClick={handleSearch}>Search</button>

        <ul className = "searchList">
            {results.length > 0 ? (results.map((item, index) => <li key={index}>{item.name} {item.location}</li>)) : ( <p> No results found </p>)}
        </ul>
        </> 
    )
}

import default Explore