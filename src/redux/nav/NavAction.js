import { ACTIVE_PAGE } from './NavTypes';

export const activePage = name => {
    return {
        type: ACTIVE_PAGE,
        payload: name
    }
};

export const activeAbout = () => {
    return {
        type: ACTIVE_PAGE,
        payload: "about"
    }
};


export const activeContact = () => {
    return {
        type: ACTIVE_PAGE,
        payload: "contact"
    }
}