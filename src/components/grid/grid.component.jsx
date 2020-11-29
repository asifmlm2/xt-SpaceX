import React from 'react';
import CardGrid from './../../common/cardgrid/cardgrid.component'
import './grid.styles.scss';


function Loader () {
    return <div className='infoMsg'><h2>Loading .... </h2></div>
}

function Error () {
    return <div className='infoMsg'><h2> Error occured while fecthing data ...</h2></div>
}

function NoRecordsFound () {
    return <div className='infoMsg'><h2> No records found!</h2></div>
}

function Grid (props) {    

    const { collection, isLoading, isError } = props;
    
    return (
        <section className='gridWrapper'>

            { isLoading ? <Loader /> : isError ?  <Error /> : 
            collection.length <= 0 ?   <NoRecordsFound /> :
            collection.map( (spaceX, index) => (
                <CardGrid key={index} spaceX={spaceX} />
            ))}
            
        </section>
    );
}

export default Grid;