import React from 'react';
import axios from 'axios';
import Filter from './../../components/filter/filter.component';
import Grid from '../../components/grid/grid.component';
import { SPACEX_URL } from './../../constants'

import './homepage.styles.scss'

export default class HomePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            response: [],
            isLoading: true,
            isError: false
        }
    }

    filterSpaceX = ( filterObj ) => {

        let { year, launchSuccess, landSuccess } = filterObj;
        sessionStorage.setItem('filter', JSON.stringify(filterObj));

        let param = '';

        launchSuccess = launchSuccess === 'True' ? 'true' : launchSuccess === 'False' ? 'false' : '';
        landSuccess = landSuccess === 'True' ? 'true' : landSuccess === 'False' ? 'false' : ''; 
        
        param = launchSuccess !== '' ? `&launch_success=${launchSuccess}` : param;
        param = landSuccess !== '' ? `${param}&land_success=${landSuccess}` : param;
        param = year !== '' ? `${param}&launch_year=${year}` : param;        

        this.setState ( {isLoading: true, isError: false}, () => this.callSpaceXApi( param ));       
        
    };

    componentDidMount () {
        const filterObj = sessionStorage.getItem('filter') ? 
            JSON.parse(sessionStorage.getItem('filter')) : '';
            filterObj !== '' ? this.filterSpaceX(filterObj) : this.callSpaceXApi('');        
    }

    callSpaceXApi = ( param ) => {

        const url = `${SPACEX_URL}${param}`;
       
        try {
            axios.get(url)
            .then((response) => {                        
                this.setState ( { response: response.data, isLoading: false, isError: false } );
            }).catch( (error) => {
                this.setState ( { response: [], isLoading: false, isError: true } );
            });
        } catch (Exception ) {
            this.setState ( { response: [], isLoading: false, isError: true } );   
        }
    }


    render () {

        const { response, isLoading, isError } = this.state;

        return (
            <section className='homePageWrapper'>
                <Filter doFilterOnSpaceX={this.filterSpaceX} />
                <Grid collection = {response} isLoading = {isLoading} isError = {isError} />
            </section>
        );
    }
}
