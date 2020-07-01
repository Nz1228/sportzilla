const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    fencers: []
};
const rootReducer = (state = initialState, action) =>{
    if (action.type !== 'DISQUAL_CHAMP') {
        return {
            ...state,
            fencers: state.fencers.push(['name'])
        };
    }
    return state;
};
const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => (
    console.log('Subscription', store.getState())
));

store.dispatch({ type: 'DISQUAL_CHAMP' });
console.log(store.getState());

