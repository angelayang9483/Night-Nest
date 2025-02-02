import ShelterCard from "../components/shelterCard"
import shelters from "../data/shelterData"
import Filter from "../components/Filter"
import { useState } from 'react'


function Explore() {
    return (
        <div style={ pageStyle } >
            <Search />
            <FilterBy />
            <h1>Explore</h1>
            <card>
                {shelters.map((item, index) => (
                    <ShelterCard shelter={item} key={index} />
                ))}
            </card>
            
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

export function FilterBy() {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showFilteredShelters, setShowFilteredShelters] = useState(false);
 
    const allTags = [...new Set(shelters.flatMap(shelter => shelter.tags))];
  
    const filteredShelters = selectedTag
      ? shelters.filter(shelter => shelter.tags.includes(selectedTag))
      : shelters;

    const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setShowFilteredShelters(true);  
    };
  
    return (
      <div>
        <Filter selectedTag={selectedTag} setSelectedTag={handleTagClick} tags={allTags} />
  
        {showFilteredShelters && filteredShelters.length > 0 && (
            <div>
                {filteredShelters.map((shelter, index) => (
                    <div key={index} className={`filterDiv ${shelter.tags.join(" ")}`}>
                        <h2>{shelter.name}</h2>
                        <p>{shelter.location}</p>
                        <p>Tags: {shelter.tags.join(", ")}</p>
                    </div>
                ))}
            </div>
        )}
      </div>
    );
  }

const pageStyle = {
    width: '100vw',
}
