import React from 'react';
import Like from '../Likes/Likes'

function Band(props) {
    const { band_name, fans, formed, origin, split } = props
    return (
        <div className="band">
            <h3> { band_name } </h3>
            <div>Formed: { formed } </div>
            <div>{ origin }</div>
            <div>Fans: { fans }</div>
            <div className="likes">
                { split === "-" ? 
                    <Like />
                    :
                    <span>Split: { split }</span>
                }
            </div>
            <hr />
        </div>
    )
}

export default Band;