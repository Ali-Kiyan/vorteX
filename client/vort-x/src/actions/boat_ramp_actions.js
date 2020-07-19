import { BOAT_RAMPS_URL } from '../components/utils/misc';

export function boatRampList(){

    const data = fetch(BOAT_RAMPS_URL).then(response=>response.json())

    return {
        type: 'GET_BOAT_RAMPS',
        payload: data
    }
    
}