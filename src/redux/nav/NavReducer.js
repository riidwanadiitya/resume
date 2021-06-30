import { ACTIVE_PAGE } from './NavTypes';

const initState = {
    activePage: "home"
}

const navReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTIVE_PAGE:
            var stateActivePage = { ...state, activePage: action.payload }
            return stateActivePage;
        default:
            return state;
    }
}

export default navReducer;