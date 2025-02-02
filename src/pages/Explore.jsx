import ShelterCard from "../components/shelterCard"
import shelters from "../data/shelterData"
import { useState } from 'react'


function Explore() {
    return (
        <div style={ pageStyle } >
            <Search />
            <h1>Explore</h1>
            {shelters.map((item, index) => (
                <ShelterCard shelter={item} key={index} />
            ))}
        </div>
    )
}

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const filteredResults = shelters.filter( (item) => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase()) );
        setResults(filteredResults);
    };
    return(
        <>
        <input type="text" placeholder="Location" value ={searchQuery} onChange = { (e) => setSearchQuery(e.target.value)}/>
        <button id="searchButton" onClick={handleSearch}>Search</button>
        <div>
            {results.length > 0 ? (
                results.map((shelter, index) => <ShelterCard key={index} shelter={shelter} />)
            ) : (
                <p>No results found</p>
            )}
        </div>
        </> 
    )
}

export default Explore

const pageStyle = {
    width: '90vw',
}