import { BOAT_RAMPS_URL } from '../components/utils/misc';

export function boatRampList(){

    const data = fetch(BOAT_RAMPS_URL, {
        mode: "cors",
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
        }}).then(response=>response.json())

    return {
        type: 'GET_BOAT_RAMPS',
        payload: data
    }
    
}