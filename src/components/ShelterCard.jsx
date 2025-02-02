const styles = {
  color: 'black',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  margin: '2%',
  padding: '2%',
  backgroundColor: 'lightgray'
}

const ShelterCard = ({ idx, shelter, handleAddLocation }) => {
  console.log(handleAddLocation)
  return (
    <div className={`filterDiv ${shelter.tags}`}>
        <div style={styles} key={idx}>
          <h3>{shelter.name}</h3>
          <p>{shelter.location}</p>
          <button onClick={() => handleAddLocation(shelter)}>Add Shelter</button>
        </div>
    </div>
  );
};

export default ShelterCard;