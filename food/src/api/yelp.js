import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 9PrI2N2ypPajd5iYkU4d1BmZjK9l9A_F3LcdzscCcQ8ZzMMC2-9eIWVn_itf2ZdoIjtWTJeeAdesQF1k5QJTwNQbQYhnYjjVAsYiHI4504TiPxBviiIgTx0___XwX3Yx'
    }
});