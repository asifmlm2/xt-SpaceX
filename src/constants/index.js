export const SPACEX_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';        

const FilterType = [
    {
        title: 'Launch Year',
        attributes: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        id: 'year'
    },
    {
        title: 'Successful Launch',
        attributes: ['True', 'False'],
        id: 'launch'
    },
    {
        title: 'Successful Landing',
        attributes: ['True', 'False'],
        id: 'land'
    }
];

export default FilterType;