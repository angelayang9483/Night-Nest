import shelters from "../data/shelterData";

const ShelterCard = () => {
    return (
        <div>
          {shelters.map((item, index) => (
            <div style={cardStyle} key={index} className={`filterDiv ${shelters.tags}`}>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
            </div>
          ))}
        </div>
      );
    };

export default ShelterCard;

const cardStyle = {
  borderWidth: 1,
  borderColor: 'red',
  borderStyle: 'solid',
  margin: '2%',
  padding: '2%',
}