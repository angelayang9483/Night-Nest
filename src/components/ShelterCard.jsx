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

  borderWidth: 1,
  borderColor: 'red',
  borderStyle: 'solid',
  margin: '2%',
  padding: '2%',

}



export default ShelterCard;