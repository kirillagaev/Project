import C from './constants';

export const displayDropDown = () => ({
    type: C.ADD_DROPDOWN,
    value: true
});

export const removeDropDown = () => ({
    type: C.ADD_DROPDOWN,
    value: false
});

export const clearCountry = () => ({
    type: C.CLEAR_COUNTRY,
    country: 'Пока ничего нет'
});