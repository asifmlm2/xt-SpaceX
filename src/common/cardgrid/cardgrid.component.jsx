import React from 'react';
import './cardgrid.styles.scss';

function CardGrid (props) {
    const { spaceX } = props;

    const { land_success } = spaceX.rocket && spaceX.rocket.first_stage && 
    spaceX.rocket.first_stage.cores[0] ? spaceX.rocket.first_stage.cores[0] : null ;

    const missionId = spaceX.mission_id && spaceX.mission_id.length > 0 ? spaceX.mission_id : [] ;
    
    return (
        <section className='cardGridWrapper'>
            <div className='imageWrapper'>
                <img src={spaceX.links.mission_patch_small} alt={spaceX.mission_name} />                
            </div>

            <div className='details'>
                <h3>{spaceX.mission_name} #{spaceX.flight_number}</h3>
                <div className='missionDetails'>
                    <h4>Mission lds:</h4>
                    <ul>                                                
                        {missionId.map ( (mission, index) => (
                            <li key={`${index}${mission}`}>{mission}</li>
                        ))}
                    </ul>
                    <div className='keyWithvalue'>
                        <h4>Launch Year: <span>{spaceX.launch_year}</span></h4>
                        <h4>Successful Launch: <span>{spaceX.launch_success? 'True': 'False'}</span></h4>
                        <h4>Successful Landing: <span>{land_success ? 'True' : land_success !== null ? 'False' : ''}</span></h4>
                    </div>
                </div>

               

            </div>
        </section>
    );
}

export default CardGrid;