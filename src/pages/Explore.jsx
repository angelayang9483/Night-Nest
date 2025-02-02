import ShelterCard from "../components/shelterCard"
import shelters from "../data/shelterData"
import Filter from "../components/Filter"
import { useState } from 'react'


const Explore = ( { handleAddLocation }) => {
    return (
        <div style={ pageStyle } >
            <h1>Explore</h1>
            <Search handleAddLocation={handleAddLocation}/>
            <FilterBy />
            {shelters.map((item, index) => {
                return <ShelterCard key={index} idx={index} shelter={item} handleAddLocation={handleAddLocation}/>
            })}
        </div>
    )
}

function Search({ handleAddLocation }) {
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
                results.map((shelter, index) => <ShelterCard key={index} idx={index} shelter={shelter} handleAddLocation={handleAddLocation}/>)
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

const pageStyle = {
    width: '90vw',
}
