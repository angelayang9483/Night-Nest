import ShelterCard from "../components/shelterCard"
import {useState} from 'react';

function Explore() {
    return (
        <>
          <h1>Explore</h1>
          <Search />
          <ShelterCard />
        </>
    )
}

function Search() {
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

export default Explore