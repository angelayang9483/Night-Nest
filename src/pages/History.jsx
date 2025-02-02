import React, { useState } from 'react';

const History = ({savedLocations }) => {
    const [like, setLike] = useState(false);

    return (
        <>
        <h1>Visited Shelters</h1>
        {savedLocations.length === 0 ? (
            <p>No shelters added.</p>
        ) : (
            savedLocations.map((shelter, index) => (
                <div style={cardStyle} key={index}>
                    <h3>{shelter.name}</h3>
                    <p>{shelter.location}</p>
                    <button onClick={() => setLike( (prevState) => !prevState)}>Like: { like ? "❤️" : "♡" }</button>
                </div>
            ))
        )}
        </>
    );
};

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
  }

export default History