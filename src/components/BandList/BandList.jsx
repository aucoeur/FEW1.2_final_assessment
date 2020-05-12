import React from 'react';
import Band from '../Band/Band';
import data from '../../metal.json';

function BandList() {
    const countries = []
    const bands = data.map( ({ ID, band_name, fans, formed, origin, split, style }) => {
            // countries[origin]
        return (
            <Band 
                key = { ID }
                band_name = { band_name }
                formed = { formed }
                origin = { origin } 
                fans = { fans }
                split = { split }
            />
        )
    })



    return (
        <div className = "BandList">
            <h2>Bands: { bands.length } </h2>
            <hr />
            <div className="Bands">
                { bands }
            </div>
        </div>
    )
}

export default BandList;