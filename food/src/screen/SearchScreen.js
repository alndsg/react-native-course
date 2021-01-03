import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SeachBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searcTerm) => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    searcTerm,
                    location: 'rio de janeiro'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage('Something went wrong!');
        }
    };

    //Call searchApi whe component is first rendered. BAD CODE!

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {term != '' && results.length > 0? <Text>We have found {results.length} results for {term}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;