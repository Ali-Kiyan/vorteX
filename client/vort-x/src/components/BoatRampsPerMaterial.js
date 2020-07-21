import React from 'react';
import BoatRampsPerMaterial from '../containers/boat_ramps_per_material_container'

const BoatRamp = (props) => {
    return (
        <div style={{width: "25vw", height: "80vh", marginTop: "20vh"}}>
            <BoatRampsPerMaterial />
        </div>
    )
}

export default BoatRamp;