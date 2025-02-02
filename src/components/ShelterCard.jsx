const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'space-between',
  alignSelf: 'center',
  width: '20%',
  backgroundColor: '#BEBBBB',
  borderRadius: '10px',
  color: 'black',
  borderWidth: 1,
  borderColor: '#BEBBBB',
  borderStyle: 'solid',
  margin: '2%',
  padding: '2%',
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
