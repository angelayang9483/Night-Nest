const ShelterCard = ({ shelter }) => {
  return (
    <div>
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
  width: '50%'
}