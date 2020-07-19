export default function(state={}, action){
    switch(action.type){
        case 'GET_BOAT_RAMPS': 
            return {...state, boatRampsList: action.payload}
        default: 
            return state
    }
}