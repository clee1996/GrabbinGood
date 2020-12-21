import {RECEIVE_WATCHLISTS, CREATE_WATCHLIST} from '../actions/watchlist_actions';

const watchlistReducer = (state = {}, action) => {
    Object.freeze(state);
    let dupState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_WATCHLISTS:
            return Object.assign({}, state, action.watchlists)
        case CREATE_WATCHLIST:
            return Object.assign({}, state, action.watchlist)
        default:
            return state;
    }
}

export default watchlistReducer;