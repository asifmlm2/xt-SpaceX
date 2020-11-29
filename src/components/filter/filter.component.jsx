import React from 'react';
import FilterType from './../../constants';
import './filter.styles.scss';

export default class Filter extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            year: '',
            launchSuccess: '',
            landSuccess: ''
        };
    }

    componentDidMount () {       

        const filterObj = sessionStorage.getItem('filter') ? 
            JSON.parse(sessionStorage.getItem('filter')) : '';

            if ( filterObj !== '' ) {
                let { year, launchSuccess, landSuccess } = filterObj;
                this.setState ( {year, launchSuccess, landSuccess} );
            }
    }

    handleFilter = (event, value, id) => {
        event.preventDefault();
        let { year, launchSuccess, landSuccess } = this.state;

        switch ( id ) {

            case 'year':
                year = ( year === '' ) || ( year !== value ) ? value : '';
            break;

            case 'launch':
                launchSuccess = ( launchSuccess === '' ) || ( launchSuccess !== value ) ? value : '';
            break;

            case 'land':
                landSuccess = ( landSuccess === '' ) || ( landSuccess !== value ) ? value : '';
            break;

            default:
            break;
        }        

        this.setState ( { year, launchSuccess, landSuccess }, () => (
            this.props.doFilterOnSpaceX(this.state)
         ) );
        
    };

    selectedFilter = ( id ) => {

        let selected = '';

        selected = id === 'year' ? this.state.year : 
                   id === 'launch' ? this.state.launchSuccess :
                   id === 'land' ? this.state.landSuccess : ''
        
        return selected;
    }
    
    render () {

        
        return (
            <section className='filterWrapper'>
                <h3>Filters</h3>

                { FilterType.map ( (filter, index) => (                    
                    <React.Fragment key={index}>   
                        

                        <div className='filterTitle' key={`${index.toString()}09`}> 
                            <label>{filter.title}</label>
                        </div>

                        <div className='filterType' key={`${index.toString()}10`}>
                            {filter.attributes.map ( (node, idx)  => (
                                <span className={node === this.selectedFilter(filter.id) ? 'selected': ''} key={`${idx.toString()}11`}
                                onClick={(event)=>this.handleFilter(event, node, filter.id)}>{node}</span>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </section>
        )
    }
}