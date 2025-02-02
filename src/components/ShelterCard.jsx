const ShelterCard = ({ shelters, handleAddLocation }) => {
    return (
        <div style={historyStyle}>
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

const historyStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
    margin: '5px',
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    width: '20%',
    backgroundColor: '#BEBBBB',
    borderRadius: '10px',
    borderWidth: 1,
    borderColor: '#BEBBBB',
    borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
  }


export default ShelterCard;