export default function (state = {}, action) {

  switch (action.type) {
    case "GET_BOAT_RAMPS":
      return { ...state, boatRampsList: action.payload };

    case "GET_BOAT_RAMPS_PER_MATERIAL":
      return { ...state, boatRampsPerMaterialList: action.payload };

    case "GET_BOAT_RAMPS_PER_SIZE":
      return { ...state, boatRampsPerSizeList: action.payload };
    
    case "FILTER_BOAT_RAMPS_PER_MATERIAL":
      return { ...state, material: action.payload.Material };
  
    case "FILTER_BOAT_RAMPS_PER_SIZE":
      return { ...state, size: action.payload.Size };
      
    default:
      return state;
  }
  
}
