import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searcTerm) => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    searcTerm,
                    location: 'niterói'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage('Something went wrong!');
        }
    };

    useEffect(() => {
        searchApi('pizza');
    },[]);

    return [searchApi, results, errorMessage]
};