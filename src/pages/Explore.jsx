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

import ShelterCard from "../components/shelterCard"
import shelters from "../data/shelterData"
import Filter from "../components/Filter"
import { useState } from 'react'


const Explore = ( {handleAddLocation }) => {
    return (
        <div style={ pageStyle } >
            <h1>Explore</h1>
            <Search />
            <FilterBy />
            <ShelterCard shelters = {shelters} handleAddLocation={handleAddLocation}/>
        </>
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
