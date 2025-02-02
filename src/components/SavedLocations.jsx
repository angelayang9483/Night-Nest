import React, { useState } from 'react';
import Explore from '../pages/Explore';
import History from '../pages/History';

const SavedLocations = (savedLocations, handleAddLocation) => {
    
    return (
        <div>
            <Explore handleAddLocation={handleAddLocation} />
            <History savedLocations={savedLocations} />
        </div>
    );
};

export default SavedLocations;