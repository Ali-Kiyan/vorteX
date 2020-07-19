import { BOAT_RAMPS_URL } from '../components/utils/misc';

export function boatRampList(){

    const request = fetch(`${BOAT_RAMPS_URL}`)

    return {
        type: 'GET_BOAT_RAMPS',
        payload: 
    }
    
}