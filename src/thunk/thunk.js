import axios from 'axios';
import C from "../../src/action/constants";

export const searchCountry = (search, dispatch) => axios.get(`https://restcountries.eu/rest/v2/alpha/${search}`)
    .then(function (response) {
        var obj = response.data, res = `Страна ${obj.name}. Столица - ${obj.capital}`;
        dispatch({type: C.LOAD_COUNTRY, country: res})})
    .catch(function (error) {dispatch({type: C.ERROR, country: 'Неверный код страны'}); console.error(error)});