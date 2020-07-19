import { BOAT_RAMPS_URL, RAMPS_PER_CONSTRUCTION_MATERIAL_URL, RAMPS_PER_SIZE_URL} from '../components/utils/misc';
import { fetchWithCORSHeader } from '../components/utils/helper'

export function boatRampList(){

    const data = fetchWithCORSHeader(BOAT_RAMPS_URL);

    return {
        type: 'GET_BOAT_RAMPS',
        payload: data
    }
    
}

export function boatRampPerMaterial(){

    const data = fetchWithCORSHeader(RAMPS_PER_CONSTRUCTION_MATERIAL_URL)
    return {
        type: 'GET_BOAT_RAMPS_PER_MATERIAL',
        payload: data
    }
    
}

export function boatRampPerSize(){

    const data = fetchWithCORSHeader(RAMPS_PER_SIZE_URL)

    return {
        type: 'GET_BOAT_RAMPS_PER_SIZE',
        payload: data
    }
    
}

export function boatRampPerViewPort(){
    
}