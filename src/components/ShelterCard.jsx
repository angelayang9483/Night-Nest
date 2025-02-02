const ShelterCard = ({ shelters, handleAddLocation }) => {
    return (
        <div>
            {shelters.map((item, index) => (
                <div style={cardStyle} key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                    <button onClick={() => handleAddLocation(item)}>Add Shelter</button>
                </div>
            ))}
        </div>
    );
};

const cardStyle = {

const ShelterCard = ({ shelter }) => {
  return (
    <div className={`filterDiv ${shelter.tags}`}>
        <div style={styles}>
          <h3>{shelter.name}</h3>
          <p>{shelter.location}</p>
        </div>
    </div>
  );
};

export default ShelterCard;

const styles = {
  borderWidth: 1,
  borderColor: 'red',
  borderStyle: 'solid',
  margin: '2%',
  padding: '2%',

}



export default ShelterCard;
  width: '50%'
}
