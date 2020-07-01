import * as actionTypes from './actions.js';
import { combineReducers, createStore } from 'redux'
import fencing from '../assets/fencing.jpg';
 
const initialState = {
    fencers: [
        {
            id: '1A',
            name: 'Me',
            image: fencing,
            score: 12,
            victoryHistory: 24
        },
        {
            id: '2B',
            name: 'Nancy',
            image: fencing,
            score: 5,
            victoryHistory: 0
        },
        {
            id: '3C',
            name: 'Leah',
            image: fencing,
            score: 4,
            victoryHistory: 1
        },
        {
            id: '4D',
            name: 'Judy',
            image: fencing,
            score: 7,
            victoryHistory: 3
        },
        {
            id: '5E',
            name: 'Resa',
            image: fencing,
            score: 5,
            victoryHistory: 12
        }
    ],
    tournaments: [
        {
        id:'A',
        title: 'World Cup',
        players: ['2B', '5E', '4D'],
        date: '6/15/2020',
        },
        {
            id: 'B',
            title: 'Epee-a-thon',
            players: ['1A', '5E', '4D', '3C'],
            date: '6/22/2020',
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.types) {
        case actionTypes.DISQUALIFY_CHAMPIONS:
            return {
                ...state,
                fencers: state.fencers.filter((fencer) => fencer.id !== action.payload),
                tournaments: state.tournaments.players.filter((id) => id !== action.payload)
            }
           
        default:
            return state;
    }
};

export default reducer;