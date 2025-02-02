import shelters from "../data/shelterData";
import ShelterCard from "../components/shelterCard"

function Explore() {
    return (
        <>
        <h1>Explore</h1>
        <Search /> 
        <FilterBy />
            <h1>Explore</h1>
        <ShelterCard />
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

export default Explore

import Filter from "../components/Filter"

export function FilterBy() {
    const [selectedTag, setSelectedTag] = useState(null);
 
    const allTags = [...new Set(shelters.flatMap(shelter => shelter.tags))];
  
    const filteredShelters = selectedTag
      ? shelters.filter(shelter => shelter.tags.includes(selectedTag))
      : shelters;
  
    return (
      <div>
        <Filter selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={allTags} />
  
        {filteredShelters.map((shelter, index) => (
          <div key={index} className={`filterDiv ${shelter.tags.join(" ")}`}>
            <h2>{shelter.name}</h2>
            <p>{shelter.location}</p>
            <p>Tags: {shelter.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    );
  }
